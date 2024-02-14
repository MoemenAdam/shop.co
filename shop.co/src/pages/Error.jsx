import { motion } from 'framer-motion'
import SideNavContext from '../store/SideNavContext'
import CartContext from '../store/CartContext'
import Page404 from './Page404'

import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import TopHeader from '../components/TopHeader'
import SideNav from '../components/SideNav'
import LayoutHolder from '../components/LayoutHolder'


export default function Error() {
  return (
    <SideNavContext>
      <CartContext>

        <TopHeader/>
        <Navbar/>
        <LayoutHolder type='404'/>
        
        <SideNav/>

      </CartContext>
  </SideNavContext>
  )
}
