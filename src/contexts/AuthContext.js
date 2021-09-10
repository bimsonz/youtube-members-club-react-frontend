import React, {useContext, useEffect, useState} from "react"
import { auth } from "../firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GithubAuthProvider, updateEmail, updatePassword, onAuthStateChanged } from "firebase/auth";


const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function githubLogin() {
        return signInWithPopup(auth, new GithubAuthProvider())
    }

    function logout() {
        return signOut(auth)
    }

    function handleEmailUpdate(email) {
        return updateEmail(currentUser, email)
    }

    function handlePasswordUpdate(password) {
        return updatePassword(currentUser, password)
    }

    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    }, [])

    const value = {
        currentUser,
        login,
        githubLogin,
        signup,
        logout,
        handlePasswordUpdate,
        handleEmailUpdate,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}