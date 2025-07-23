import React from 'react'
import cartHook from '../../Hook/cartHook'
import { FcManager,FcBusinesswoman } from "react-icons/fc";
import { LuFootprints } from "react-icons/lu";
import { MdOutlineChildCare } from "react-icons/md";
import { GiWesternHat } from "react-icons/gi";

const Cart = () => {
    const [cart, setCurt] = cartHook()
    const categories = [
    {
      category: "Men",
      Logo: <FcManager/>,
      url: "/shop/man",
    },
    {
      category: "Women",
      Logo: <FcBusinesswoman/>,
      url: "/shop/women",
    },
    {
      category: "Foot",
      Logo: <LuFootprints/>,
      url: "/shop/foot",
    },
    {
      category: "Kids",
      Logo: <MdOutlineChildCare/>,
      url: "/shop/kids",
    },
    {
      category: "B&F",
      Logo: "",
      url: "/shop/bangla",
    },
    {
      category: "Western",
      Logo: <GiWesternHat/>,
      url: "/shop/western",
    },
  ];
  return (
    <div>
      {
       categories?. map((category,index) =>(
        <div key={index}>
            dcdcd
        </div>
       )) 
      }
    </div>
  )
}

export default Cart
