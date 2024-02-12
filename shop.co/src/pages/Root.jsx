import { useState } from 'react'
import { motion } from 'framer-motion'
import { SideNavContext } from '../store/SideNavContext'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import TopHeader from '../components/TopHeader'
import SideNav from '../components/SideNav'

export default function Root() {
  const [sideNavHidden, setSideNavHidden] = useState(true);
  return (
    <div>
      <SideNavContext.Provider value={{sideNavHidden, setSideNavHidden}}>
        <TopHeader/>
        <Navbar/>
        
        <motion.div
          className='overflow-hidden'
          onClick={()=>{
            if(!sideNavHidden)setSideNavHidden(true)
          }}
        >
          <Outlet/>
          
          <Footer/>
        </motion.div>
        <SideNav/>
      </SideNavContext.Provider>
    </div>
  )
}
