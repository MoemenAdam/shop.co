import { useContext, useState, useRef,useEffect } from "react"
import CartLayout from "../components/CartLayout"
import { Link } from "react-router-dom"
import { CartCtx } from "../store/CartContext"
import Reavel from "../Reavel"
import { MdOutlineDiscount } from "react-icons/md";
import { motion, AnimatePresence  } from "framer-motion";
import AddToCart from "../store/AddToCart"
import { IoIosArrowForward } from "react-icons/io";
import Img from "../components/Img"


export default function Cart() {
  const { setCart } = useContext(CartCtx)
  const { Cost,setCost } = useContext(CartCtx)
  const [ Discount, setDiscount ]= useState(0)
  const [ CorrectDiscount, setCorrectDiscount ] = useState('Yet')
  const [ Checkout, setCheckout ] = useState(false)
  const DiscountRef = useRef()
  const Cart = JSON.parse(localStorage.getItem('cart'))
  

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  const handlePromoCode = (e)=>{
    e.preventDefault();
    if(DiscountRef.current.value === 'Moemen'){
      setDiscount(20)
      setCorrectDiscount(true)
    }else if(DiscountRef.current.value === 'MeMo'){
      setDiscount(100)
      setCorrectDiscount(true)
    }else{
      setDiscount(0)
      setCorrectDiscount(false)
    }
  }


  if(Checkout){
    // empty the cart
    // AddToCart([],setCart,setCost,0,'empty')
    return(
      <div className="mainMargin flex-col-reverse lg:flex-row flex items-center">
        <div className="text-center flex flex-col items-center gap-5">
          <Reavel>
            <h1 className="bolded text-4xl xsm:text-5xl">Thank You for Your Purchase!</h1>
          </Reavel>
          <Reavel><p>Must add items on the card before you proceed to checkout</p></Reavel>
          <Reavel className="p-4"><Link className="btn w-fit" to='/Shop'>Go to Shop</Link></Reavel>
        </div>
          <motion.div
            initial={{opacity:0, y:75}}
            animate={{opacity:1, y:0}} transition={{type:'just'}} 
            className="flex-grow relative w-full nav:w-fit">
              <Img src="order_confirmed.gif"  alt="" img="Confirm" />
          </motion.div>
      </div>
    )
  }

  if(!Cost){
    return (
      <div className="mainMargin flex-col-reverse lg:flex-row flex items-center">
        <div className="text-center flex flex-col items-center gap-5">
          <Reavel><h1 className="bolded text-4xl xsm:text-5xl">Your Cart is Empty!</h1></Reavel>
          <Reavel><p>Must add items on the card before you proceed to checkout</p></Reavel>
          <Reavel className="p-4"><Link className="btn w-fit" to='/Shop'>Go to Shop</Link></Reavel>
        </div>
          <motion.div
            initial={{opacity:0, y:75}}
            animate={{opacity:1, y:0}} transition={{type:'just'}} 
            className="flex-grow relative w-full nav:w-fit">
              <Img src="undraw_shopping_app_flsj.png" alt="" img="Empty"/>
          </motion.div>
      </div>
    )
  } 
  return (
    <div className="mainMargin">
      
      <div className='flex my-5 items-center gap-4'>
        <Link to='/' className='text-gray-400'>Home</Link>
        <IoIosArrowForward color='gray'/>
        <p className=''>Cart</p>
      </div>
      <h1 className="bolded text-3xl xsm:text-4xl">Your Cart</h1>
      <div className="mt-10 flex flex-wrap gap-5">
        <motion.div key={Cart.length} className="flex flex-grow-huge h-fit flex-col rounded-xl border-2 p-5">
            <AnimatePresence>
            {
              Cart.map((item, index) => {
                return (
                  <AnimatePresence key={index} mode="wait">
                    <motion.div
                      initial={{height:'auto',opacity:0,y:0}}
                      animate={{height:'auto',opacity:1,y:10}}
                      exit={{height:0,opacity:0,y:-10}}
                      key="modal"
                      transition={{type:'just',delay:0.1*index}}
                        >
                      <CartLayout setCart={setCart} setCost={setCost} item={item}/>
                      {index+1!==Cart.length && <hr className="my-5"/>}
                    </motion.div>
                  </AnimatePresence>
                )
              })
            }
            </AnimatePresence>

        </motion.div>
        <motion.div
          
          initial={{opacity:0,y:10}}
          animate={{opacity:1,y:0}}
        className="p-5 rounded-xl border-2 flex-grow sm:min-w-[450px] h-fit">
          <h1 className="mb-5 font-bold text-xl">Order Summary</h1>
          <div className="flex flex-col gap-5">
              <div className="flex justify-between">
                <div>Subtotal</div>
                <div className="text-lg font-bold">${Cost}</div>
              </div>
              <div className="flex justify-between">
                <div>Discount (-{Discount}%)</div>
                <div className="text-lg font-bold text-red-600">-${Cost*Discount/100}</div>
              </div>
              <div className="flex justify-between">
                <div>Delivery Fee</div>
                <div className="text-lg font-bold">$15</div>
              </div>
              <hr />
              <div className="flex justify-between">
                <div>Total</div>
                <div className="text-lg font-bold">${15 + Cost - Cost*Discount/100}</div>
              </div>
              <div>
                <div title="Moemen" className="absolute translate-y-4 translate-x-4"><MdOutlineDiscount size={20}/></div>
                <form onSubmit={handlePromoCode} className="flex flex-wrap gap-5">
                  <input ref={DiscountRef} className="flex-grow bg-gray-100 rounded-full py-3 pl-10 outline-none" placeholder="Add promo code" type="text" />
                  <button className="btn text-center sm:flex-grow-0 flex-grow" type="submit">Apply</button>
                </form>
                {CorrectDiscount===false && <p className="font-bold mt-5 text-center text-red-600">Wrong promo code please try again!</p>}
                {CorrectDiscount==='Yet' && <p className="font-bold mt-5 text-center">Use promo code Moemen for 20% discount</p>}
                {CorrectDiscount===true && <p className="font-bold mt-5 text-center text-green-600">Promo code applied successfully</p>}
              </div>
              <div className="flex mt-5 mb-5">
                <Link className="btn flex-grow text-center" onClick={()=>{
                  AddToCart([],setCart,setCost,0,'empty')
                  setCheckout(true)
                }}>Go to Checkout</Link>
              </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
