import { createContext, useEffect, useState } from "react";

export const CartCtx = createContext({
  cart: 0,
  setCart: ()=>{}
})

export default function CartContext({children}) {
  const LocalStorage = JSON.parse(localStorage.getItem('cart'));
  const CartState = LocalStorage?.length??0;
  const CostState = LocalStorage?.reduce((holder, a) => holder + a.cost*a.Quantity,0);
  
  
  const [Cart, setCart] = useState(CartState);
  const [Cost, setCost] = useState(CostState);
  // this state to check if my cart updated (delete item , increase quantity , decrease quantity,)

  return (
    <CartCtx.Provider value={{Cart, setCart, Cost, setCost}}>
      {children}
    </CartCtx.Provider>
  )
}