import React, {useContext, useEffect, useState} from "react"
import { messaging } from "../messaging";

import { onMessage } from "firebase/messaging";

const MessagingContext = React.createContext()

export function useMessaging() {
    return useContext(MessagingContext)
}

export function MessagingProvider({ children }) {
    const [message, setMessage] = useState()

    function signup() {
    }


    useEffect(() => {
        return onMessage(messaging, (payload) => {
            setMessage('')
            console.log('Message received. ', payload);
            setMessage(payload.notification.body)
        });
    }, [])

    const value = {
        message
    }

    return (
        <MessagingContext.Provider value={value}>
            {children}
        </MessagingContext.Provider>
    )
}