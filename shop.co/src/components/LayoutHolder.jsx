import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import { SideNavCtx } from '../store/SideNavContext' 
import Page404 from '../pages/Page404'

export default function LayoutHolder({type}) {
  const {sideNavHidden, setSideNavHidden} = useContext(SideNavCtx);
  return (
    <div
      className='overflow-hidden'
      onClick={()=>{
        if(!sideNavHidden)setSideNavHidden(true)
        }}
      >
      {
        type==='Outlet'?<Outlet/>:<Page404/>
      }    
      <Footer/>
    </div>
  )
}
