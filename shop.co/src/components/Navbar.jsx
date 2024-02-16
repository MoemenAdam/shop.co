import { useContext, useRef, useState} from 'react'
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { SideNavCtx } from '../store/SideNavContext'
import { CartCtx } from '../store/CartContext'

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const {sideNavHidden, setSideNavHidden} = useContext(SideNavCtx);
  const { Cart } = useContext(CartCtx);
  const cartRef = useRef();
  const navigate = useNavigate();
  const { scrollY } = useScroll();
  const search = useRef();

  useMotionValueEvent(scrollY,'change', (latest) => {
    const prev = scrollY.getPrevious();
    if(latest > prev && latest > 250){
      setHidden(true);
    }else{
      setHidden(false);
    }
  })

  const handleFormSubmit = (e)=>{
    e.preventDefault();
    navigate(`/Shop/${search.current.value}`);
  }

  const toggleSideNav = ()=>{
    setSideNavHidden(!sideNavHidden);
  }

  return (
      <motion.div 
        variants={{
          visible:{y:0},
          hidden:{y:'-160%'}
        }}
        animate={hidden?'hidden':'visible'}
        transition={{type:'just'}}
        className='sticky top-0 bg-white shadow-md z-50 pb-4'
        >
          <motion.nav
          className=" bg-white w-full mainPadding py-4 flex items-center nav:gap-12 gap-0 justify-between ">
            <motion.span initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}>
              <Link className="text-2xl xsm:text-4xl font-bold bolded" to=''>SHOP.CO</Link>
            </motion.span>
            <div className="hidden nav:block mt-3">
              <ul className="flex gap-5">
              <motion.li initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}><Link className="Links" to='/Shop'>Shop</Link></motion.li>
            <motion.li initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}><Link className="Links" to='/NewArrival'>New Arrivals</Link></motion.li>
            <motion.li initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}><Link className="Links" to='/TopSelling'>Top Selling</Link></motion.li>
            <motion.li initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}><Link className="Links" to='/OnSale'>On Sale</Link></motion.li>
              </ul>
            </div>
            
            <div className='lg:flex-grow'>
              <motion.form
                 initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}
              className="bg-gray-100 p-1 px-3 rounded-full hidden nav:flex mt-3 gap-2" onSubmit={handleFormSubmit}>
                <button type="submit">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                </button>
                <input ref={search} className="p-1 outline-none w-full bg-transparent" type="text" placeholder="Search for products..." />
              </motion.form>
            </div>

            <motion.div
               initial={{opacity:0,y:100}} animate={{opacity:1,y:0}}
            className="flex gap-3 xsm:mt-3">
              <div className='relative'>
                {
                  Cart!==0 && <motion.div
                  initial={{scale:1.2,y:-18,x:18}}
                  animate={{scale:1,y:-18,x:18}}
                  transition={{type:'just'}}
                  key={Cart}
                  className='absolute translate-x-5 -translate-y-4 w-1 h-1 rounded-full bg-black flex items-center justify-center text-white p-3'>
                    {Cart}
                  </motion.div>
                }
                <Link to='Cart'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                </Link>
              </div>
              <div className={`${Cart?'ml-3':''} cursor-pointer block nav:hidden`} onClick={toggleSideNav}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </div>
            </motion.div>
          </motion.nav>
    </motion.div>
  )
}
