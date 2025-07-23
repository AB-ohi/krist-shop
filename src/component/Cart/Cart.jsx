import React from 'react'
import cartHook from '../../Hook/cartHook'
import { FcManager, FcBusinesswoman } from "react-icons/fc";
import { LuFootprints } from "react-icons/lu";
import { MdOutlineChildCare } from "react-icons/md";
import { GiWesternHat, GiFireworkRocket } from "react-icons/gi";
import "./cart.css"
import { Link } from 'react-router-dom';

const Cart = () => {
    const [cart, setCart] = cartHook();

  const categories = [
    {
      category: "Men",
      Logo: <FcManager />,
      url: "/shop/man",
    },
    {
      category: "Women",
      Logo: <FcBusinesswoman />,
      url: "/shop/women",
    },
    {
      category: "Foot",
      Logo: <LuFootprints />,
      url: "/shop/foot",
    },
    {
      category: "Kids",
      Logo: <MdOutlineChildCare />,
      url: "/shop/kids",
    },
    {
      category: "B&F",
      Logo: <GiFireworkRocket />,
      url: "/shop/bangla",
    },
    {
      category: "Western",
      Logo: <GiWesternHat />,
      url: "/shop/western",
    },
  ];

  return (
    <div className='carts'>
      {
       categories?. map((category,index) =>(
        <div className='cart' key={index}>
           <Link className='cartLink' to={category.url}>
           <p>{category.Logo}</p>
           <p>{category.category}</p>
           </Link>

        </div>
       )) 
      }
    </div>
  )
}

export default Cart
