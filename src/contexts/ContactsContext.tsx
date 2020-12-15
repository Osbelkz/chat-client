import React, {useContext} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";
import {ContactType} from "../types/types";


const ContactsContext = React
    .createContext<{ contacts: Array<ContactType>; createContact: (id: string, name: string) => void; }>({contacts: [], createContact(){}})

export function useContacts() {
    return useContext(ContactsContext)
}

export const ContactsProvider: React.FC = ({children}) => {

    const [contacts,setContacts] = useLocalStorage("contacts", [])

    function createContact(id: string, name: string) {
        setContacts((prevContacts: Array<ContactType>) => {
            return [...prevContacts, {id, name}]
        })
    }

    return (
        <ContactsContext.Provider value={{contacts, createContact}}>
            {children}
        </ContactsContext.Provider>
    );
};

