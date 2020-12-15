import React, {useContext, useEffect, useState} from 'react';
import {io, Socket} from "socket.io-client";

const SocketContext = React.createContext({} as Socket)


export const useSocket = () => {
    return useContext(SocketContext)
}


export const SocketProvider: React.FC<{id: string}> = ({id, children}) => {

    const [socket, setSocket] = useState<any>()

    useEffect(() => {
        const newSocket = io("http://localhost:5000", {query: {id}})

        setSocket(newSocket)

        return () => {
            newSocket.close()
        }
    }, [id])

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    );
};
