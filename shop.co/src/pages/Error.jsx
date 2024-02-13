import { useState } from 'react'
import { motion } from 'framer-motion'
import { SideNavContext } from '../store/SideNavContext'
import Page404 from './Page404'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopHeader from '../components/TopHeader'
import SideNav from '../components/SideNav'

export default function Error() {
  const [sideNavHidden, setSideNavHidden] = useState(true);
  return (
    <SideNavContext.Provider value={{sideNavHidden, setSideNavHidden}}>
      <TopHeader/>
      <Navbar/>
      <motion.div
        className='overflow-hidden'
        onClick={()=>{
          if(!sideNavHidden)setSideNavHidden(true)
        }}
      >
        <Page404/>
      
      <Footer/>
    </motion.div>
    <SideNav/>
  </SideNavContext.Provider>
  )
}
