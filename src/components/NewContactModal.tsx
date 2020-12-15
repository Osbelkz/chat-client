import React, {FormEvent, useRef} from 'react';
import {Button, Form, Modal} from 'react-bootstrap';
import {useContacts} from "../contexts/ContactsContext";

type NewContactModalPropsType = {
    closeModal: () => void
}

const NewContactModal: React.FC<NewContactModalPropsType> = ({closeModal}) => {

    const idRef = useRef<HTMLInputElement>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const { createContact } = useContacts()


    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        createContact(idRef.current?.value as string, nameRef.current?.value as string)

        closeModal()
    }

    return (
        <>
            <Modal.Header closeButton>Create Contact</Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group>
                        <Form.Label>Id</Form.Label>
                        <Form.Control type={"text"} ref={idRef} required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type={"text"} ref={nameRef} required/>
                    </Form.Group>
                    <Button type={"submit"}>Create</Button>
                </Form>
            </Modal.Body>
        </>
    );
};

export default NewContactModal;
