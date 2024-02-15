import SideNavContext from '../store/SideNavContext'
import CartContext from '../store/CartContext'
import Navbar from '../components/Navbar'
import TopHeader from '../components/TopHeader'
import SideNav from '../components/SideNav'
import LayoutHolder from '../components/LayoutHolder'


export default function Root() {
  return (
    <div className='bg-whgite'>
      <SideNavContext>
        <CartContext>
          <TopHeader/>
          <Navbar/>

          <LayoutHolder type='Outlet'/>

          <SideNav/>
        </CartContext>
      </SideNavContext>
    </div>
  )
}
