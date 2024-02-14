import SideNavContext from '../store/SideNavContext'
import CartContext from '../store/CartContext'

import Navbar from '../components/Navbar'
import TopHeader from '../components/TopHeader'
import SideNav from '../components/SideNav'
import LayoutHolder from '../components/LayoutHolder'


export default function Error() {
  window.scrollTo(0,0)
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
