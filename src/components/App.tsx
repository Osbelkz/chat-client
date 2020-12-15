import React from 'react';
import '../App.css';
import { useLocalStorage } from '../hooks/useLocalStorage';
import Dashboard from './Dashboard';
import Login from "./Login";
import {ContactsProvider} from "../contexts/ContactsContext";
import {ConversationsProvider} from "../contexts/ConversationsProvider";
import {SocketProvider} from "../contexts/SocketProvider";


function App() {

    const [id, setId] = useLocalStorage("id")

    const dashboard = (
        <SocketProvider id={id}>
            <ContactsProvider>
                <ConversationsProvider id={id}>
                    <Dashboard id={id}/>
                </ConversationsProvider>
            </ContactsProvider>
        </SocketProvider>
    )

    return (
        <>
            {id ? dashboard : <Login onIdSubmit={setId}/>}
        </>
    );
}

export default App;
