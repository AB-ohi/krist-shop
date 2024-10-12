import { useEffect, useState } from "react";
import shopLocation from "../../../public/img/shopLocation.png"

const Contact = () => {
    const [contacts, setContacts] = useState([]);
    console.log(contacts)
    useEffect(()=>{
        fetch('http://localhost:5000/contact')
        .then(res => res.json())
        .then(data => {
            if(data){
                setContacts(data)
            }else{
                setContacts("stor can't found")
            }
        })
    },[])
    return (
        <div>
            <p></p>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'30px', width:'75%',  margin:'50px auto' }}>
                {
                    contacts.map((contact)=>(
                        <div key={contact._id} style={{boxShadow:"rgb(38, 57, 77) 0px 20px 30px -10px", padding:'20px', borderRadius:'11px', position:'relative'}}>
                            <p style={{display:'flex', flexDirection:'column',  }}><span style={{fontSize:'20px',fontWeight:"bold",}}>our physical shop address</span>{contact.physical_shop_address}</p>
                            <p>E-mail: {contact.shop_email}</p>
                            <p>Phone: {contact.phone_number}</p>
                            <img style={{position:'absolute', bottom:'10px', right:'10px', width:'100px', opacity:'0.2'}} src={shopLocation} alt="" />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Contact;