import { createContext, useState } from "react";

export const CartCtx = createContext({
  cart: [],
  setCart: ()=>{}
})

export default function CartContext({children}) {
  const [Cart, setCart] = useState(0);
  return (
    <CartCtx.Provider value={{Cart, setCart}}>
      {children}
    </CartCtx.Provider>
  )
}
