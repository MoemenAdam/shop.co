import { useState } from 'react'
import { motion } from 'framer-motion'
import { SideNavContext } from '../store/SideNavContext'


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
        initial={{backgroundColor:'rgba(0, 0, 0, 0)'}}
        animate={{backgroundColor:sideNavHidden?'rgba(0, 0, 0, 0)':'rgba(0, 0, 0, 0.5)'}}
        className='overflow-hidden'
        onClick={()=>{
          if(!sideNavHidden)setSideNavHidden(true)
        }}
      >
        <h1 className='text-6xl'>Error</h1>
        <p className='text-2xl'>This page is not found</p>
      
      <Footer/>
    </motion.div>
    <SideNav/>
  </SideNavContext.Provider>
  )
}
