import React, {FormEvent, useState} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import {useContacts} from "../contexts/ContactsContext";
import {useConversations} from "../contexts/ConversationsProvider";

type NewConversationModalPropsType = {
    closeModal: () => void
}

const NewConversationModal: React.FC<NewConversationModalPropsType> = ({closeModal}) => {

    const [selectedContactIds, setSelectedContactIds] = useState<Array<string>>([])
    const {contacts} = useContacts()
    const {createConversation} = useConversations()

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        createConversation(selectedContactIds)

        closeModal()
    }

    function handleCheckboxChange(contactId: string) {
        setSelectedContactIds(prevSelectedContactIds => {
            if (prevSelectedContactIds.includes(contactId)) {
                return prevSelectedContactIds.filter(prevId => {
                    return contactId !== prevId
                })
            } else {
                return  [...prevSelectedContactIds, contactId]
            }
        })
    }


    return (
        <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    {contacts.map(contact => {
                        return <Form.Group controlId={contact.id} key={contact.id}>
                            <Form.Check
                                type={"checkbox"}
                                label={contact.name}
                                checked={selectedContactIds.includes(contact.id)}
                                onChange={()=>handleCheckboxChange(contact.id)}
                            />
                        </Form.Group>
                    })}
                    <Button type={"submit"}>Create</Button>
                </Form>
            </Modal.Body>
        </>
    );
};

export default NewConversationModal;
