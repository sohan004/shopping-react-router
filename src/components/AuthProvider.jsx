import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from './fireb';

export const AuthContex = createContext(null)

const AuthProvider = ({ children }) => {
    const auth = getAuth(app);
    const [user, setUser] = useState(null)
    const [load, setLoad] = useState(true)

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password);
    const signin = (email, password) => signInWithEmailAndPassword(auth, email, password);
    const update = (u, n) => updateProfile(u, { displayName: n })
    const emailv = (u) => sendEmailVerification(u)
    const out = () => signOut(auth)



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, current => {
            setUser(current)
            setLoad(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])


    const info = {
        signup,
        update,
        emailv,
        signin,
        out,
        user,
        load
    }


    return (
        <AuthContex.Provider value={info}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;