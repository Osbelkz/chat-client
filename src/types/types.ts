export type ContactType = {
    id: string
    name: string
}

export type MessageType = {
    text: string
    sender: string
}
export type FormattedMessageType = {
    text: string
    senderName: string
    fromMe: boolean
}

export type ConversationType = {
    recipients: Array<ContactType>
    selected: boolean
    messages: Array<MessageType>
}

export type FormattedConversationType = {
    recipients: Array<ContactType>
    selected: boolean
    messages: Array<FormattedMessageType>
}
