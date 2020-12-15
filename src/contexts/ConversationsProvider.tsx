import React, {useCallback, useContext, useEffect, useState} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";
import {ConversationType, FormattedConversationType} from "../types/types";
import {useContacts} from "./ContactsContext";
import {useSocket} from "./SocketProvider";


type initialValueType = {
    conversations: Array<ConversationType>
    createConversation: (recipients: Array<string>) => void
    selectedConversation: FormattedConversationType
    selectConversationIndex: (index: number) => void
    sendMessage: (recipients: Array<string>, text: string) => void
}

const ConversationsContext = React
    .createContext<initialValueType>({} as initialValueType)

export function useConversations() {
    return useContext(ConversationsContext)
}

type ConversationsProviderPropsType = {
    id: string
}

export const ConversationsProvider: React.FC<ConversationsProviderPropsType> = ({id, children}) => {

    const [conversations, setConversations] = useLocalStorage("conversations", [])
    const {contacts} = useContacts()
    const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)
    const socket = useSocket()

    function createConversation(recipients: Array<string>) {
        setConversations((prevConversations: Array<{ id: string, name: string }>) => {
            return [...prevConversations, {recipients, messages: []}]
        })
    }

    const addMessageToConversation = useCallback(
        ({recipients, text, sender}: { recipients: Array<string>, text: string, sender: string }) => {
            setConversations((conversations: Array<ConversationType>) => {
                let madeChange = false
                const newMessage = {sender, text}
                const newConversation = conversations.map((conversation: ConversationType) => {
                    if (arrayEquality(conversation.recipients, recipients)) {
                        madeChange = true
                        return {
                            ...conversation, messages: [...conversation.messages, newMessage]
                        }
                    }
                    return conversation
                })


                if (madeChange) {
                    return newConversation
                } else {
                    return [...conversations, {recipients, messages: [newMessage]}]
                }
            })
        }, [setConversations])

    useEffect(() => {
        if (socket == null) return

        socket.on("receive-message", addMessageToConversation)

        return () => {
            socket.off("receive-message")
        }
    }, [socket, addMessageToConversation])

    function sendMessage(recipients: Array<string>, text: string) {

        socket.emit("send-message", {recipients, text})

        addMessageToConversation({recipients, text, sender: id})
    }

    const formattedConversations = conversations.map((conversation: ConversationType, index: number) => {
        const recipients = conversation.recipients.map(recipient => {
            const contact = contacts.find(contact => {
                return contact.id === recipient.id
            })
            const name = (contact && contact.name) || recipient
            return {id: recipient, name}
        })
        const messages = conversation.messages.map(message => {
            const contact = contacts.find(contact => {
                return contact.id === message.sender
            })
            const name = (contact && contact.name) || message.sender
            const fromMe = id === message.sender
            return {...message, senderName: name, fromMe}
        })
        const selected = index === selectedConversationIndex

        return {...conversation, messages, recipients, selected}
    })

    const value = {
        conversations: formattedConversations,
        selectedConversation: formattedConversations[selectedConversationIndex],
        selectConversationIndex: setSelectedConversationIndex,
        createConversation,
        sendMessage
    }

    return (
        <ConversationsContext.Provider value={value}>
            {children}
        </ConversationsContext.Provider>);
};


function arrayEquality(a: Array<any>, b: Array<any>) {
    if (a.length !== b.length) return false

    a.sort()
    b.sort()

    return a.every((element, index) => {
        return element === b[index]
    })
}
