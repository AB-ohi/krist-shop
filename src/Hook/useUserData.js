import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const useUserData = () => {
    const {user} = useContext(AuthContext)
    const [User, setUser]= useState()
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/user/${user.displayName}`)
        .then((res)=> res.json())
        .then(data => setUser(data))
        
        }
    },[user])
    return {User};
};

export default useUserData;