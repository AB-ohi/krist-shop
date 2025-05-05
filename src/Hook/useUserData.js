import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { json } from "react-router-dom";

const useUserData = () => {
    const {user} = useContext(AuthContext)
    const [User, setUser]= useState()
    const [AllUser, setAllUser] = useState()
    useEffect(()=>{
        if(user){
            fetch(`http://localhost:5000/user/${user.displayName}`)
        .then((res)=> res.json())
        .then(data => setUser(data))
        
        }
    },[user])
    useEffect(()=>{
        fetch('http://localhost:5000/user')
        .then(res => res.json())
        .then(data => {
            setAllUser(data)
            
        })
    },[])
    return {User, AllUser};
};

export default useUserData;