import { useContext } from "react"
import CartLayout from "../components/CartLayout"
import { Link } from "react-router-dom"
import { CartCtx } from "../store/CartContext"
export default function Cart() {
  const {setCart} = useContext(CartCtx)
  window.scrollTo(0,0)
  const Cart = JSON.parse(localStorage.getItem('cart'))
  console.log(Cart);

  if(!Cart){
    setCart(0)
    return (
      <div className="mainMargin flex-col-reverse lg:flex-row flex items-center">
        <div className="text-center flex flex-col items-center gap-5">
          <h1 className="bolded text-4xl xsm:text-5xl">Your Cart is Empty!</h1>
          <p>Must add items on the card before you proceed to checkout</p>
          <Link className="btn w-fit" to='/Shop'>Go to Shop</Link>
        </div>
        <div>
          <img src="undraw_shopping_app_flsj.png" alt="" />
        </div>
      </div>
    )
  }

  return (
    <div className="mainMargin flex">
      <div>
        <h1 className="bolded text-4xl">Your Cart</h1>
        <div className="mt-10">
          {
            Cart.map((item, index) => {
              return (
                <CartLayout key={index} item={item} />
              )
            })
          }
        </div>
      </div>
      <div className="flex-grow">
        a
      </div>
    </div>
  )
}
