import { useContext, useRef} from 'react'
import { motion } from "framer-motion"
import { Link, useNavigate } from "react-router-dom"
import { SideNavCtx } from '../store/SideNavContext'

export default function SideNav() {
  const {sideNavHidden, setSideNavHidden} = useContext(SideNavCtx);
  const navigate = useNavigate();
  const search = useRef();
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
      visible:{x:0},
      hidden:{x:'100%'}
    }}
    initial={{x:'100%'}}
    animate={sideNavHidden?'hidden':'visible'}
    transition={{type:'just'}}
    className='z-50 bg-black text-white nav:hidden fixed h-100vh right-0 top-0 max-w-full w-64 p-10 '
  >
    <div>
      <svg onClick={toggleSideNav} className='mb-5 cursor-pointer w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0  0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      <div className="">
        <ul className="flex flex-col gap-10 mt-10">
            <li><Link className="Links" to='/Shop'>Shop</Link></li>
            <li><Link className="Links" to='/NewArrival'>New Arrivals</Link></li>
            <li><Link className="Links" to='/TopSelling'>Top Selling</Link></li>
            <li><Link className="Links" to='/OnSale'>On Sale</Link></li>
          <form className="flex gap-2" onSubmit={handleFormSubmit}>
            <button type="submit">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            </button>
            <input ref={search} className="p-1 outline-none w-full bg-transparent" type="text" placeholder="Search for products..." />
          </form>
        </ul>
      </div>
    </div>
    </motion.div>
  )
}
