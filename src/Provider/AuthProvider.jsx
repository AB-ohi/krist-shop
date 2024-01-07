import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth"
import {  createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email,password)=>{
        setLoading();
        return signInWithEmailAndPassword(auth, email, password)
    }
   
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (createUser)=>{
            setUser(createUser);
        });
        return() =>{
             unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn

    }

    return (
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
};

export default AuthProvider;