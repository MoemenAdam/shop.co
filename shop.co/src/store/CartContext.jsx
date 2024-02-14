import { createContext, useState } from "react";

export const CartCtx = createContext({
  cart: 0,
  setCart: ()=>{}
})

export default function CartContext({children}) {
  const [Cart, setCart] = useState(JSON.parse(localStorage.getItem('cart'))?.length??0);
  return (
    <CartCtx.Provider value={{Cart, setCart}}>
      {children}
    </CartCtx.Provider>
  )
}
