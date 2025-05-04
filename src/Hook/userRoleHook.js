import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Provider/AuthProvider"

const userRoleHook =()=>{
    const [userData, setUserData] = useState(null)
    const {user} = useContext(AuthContext);
    useEffect(()=>{
        if (!user?.email)return
        const fetchData = async ()=>{
           const res = await fetch ('http://localhost:5000/user')
           const data = await res.json();
            const matchedUser = data.find(u =>u.email == user.email);
            setUserData(matchedUser)
        } 
        fetchData()
        },[user])
        return(userData)
        
}

export default userRoleHook