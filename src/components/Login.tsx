import React, {FormEvent, useRef} from 'react';
import {Button, Container, Form} from "react-bootstrap";
import { v4 } from 'uuid';

type LoginPropsType = {
    onIdSubmit: (id: string) => void
}

const Login: React.FC<LoginPropsType> = ({onIdSubmit}) => {



    const idRef = useRef<HTMLInputElement>(null);

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        onIdSubmit(idRef.current?.value as string)
    }

    function createNewId() {
        onIdSubmit(v4())
    }


    return (
        <Container className="align-items-center d-flex" style={{height: "100vh"}}>
            <Form onSubmit={handleSubmit} className="w-100">
                <Form.Group>
                    <Form.Label>Enter your ID</Form.Label>
                    <Form.Control type={"text"} ref={idRef} required/>
                </Form.Group>
                <Button type={"submit"} className="mr-2">Login</Button>
                <Button variant={"secondary"} onClick={createNewId}>Create A New Id</Button>
            </Form>
        </Container>
    );
};

export default Login;
