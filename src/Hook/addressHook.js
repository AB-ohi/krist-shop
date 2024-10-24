import  { useContext, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAddress = () => {
    const {user} = useContext(AuthContext)
    const [addressList,setAddressList] = useState([])
    
    const {refetch} = useQuery(
      ['addressList', user?.email],
      () => fetch(`http://localhost:5000/address?user=${user.email}`).then(res => res.json()),
      {
        enabled: !!user?.email,
        refetchInterval: 5000,
        onSuccess:(data)=>{
          if (data && Array.isArray(data)) {
            const filterAddressList = data.filter((addressList)=>addressList.user_name === user.email)
            setAddressList(filterAddressList)
            refetch()
          } else {
            console.error("Error: No data fetched");
          }
        }
      }
    )
    return {addressList, refetch}
};
export default useAddress;


