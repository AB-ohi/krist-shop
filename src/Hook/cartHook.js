import React, { useState } from 'react'

const cartHook = () => {
    const [cart, setCart] = useState(true);
  return [cart,setCart]
}

export default cartHook;
