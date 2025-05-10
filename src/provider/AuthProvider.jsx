import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth,  onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

const auth = getAuth(app);
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)  
    const [loading, setLoading] = useState(true)

  

    const createUser =(email, password)=>{
        
        return createUserWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const unSubs = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return () =>{
            unSubs()
        }
    },[])

    const logOut =()=>{
        return signOut(auth)
    }

    const logIn =(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (updatedData) =>{
        return updateProfile(auth.currentUser ,updatedData)
    }
    const forgotPass =(email) =>{
        return sendPasswordResetEmail(auth, email)
    }
    
    const authData = {
        user, setUser, createUser, logOut, logIn, loading, setLoading, updateUser, forgotPass
    }

    
    
    
    return (
        <AuthContext value={authData}>{children}</AuthContext>
    );
};

export default AuthProvider;