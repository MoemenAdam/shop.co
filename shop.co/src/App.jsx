import { useRef } from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Root from "./pages/Root"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"
import Prodcut from "./pages/Prodcut"
import { motion } from "framer-motion"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root/>, 
    errorElement:<Error/>,
    children: [
      {path: "", element: <Home/>},
      { 
        path: "Shop",
        element: <Shop/>,
        children:[
          {path: ":type", element: <Shop/>},
        ]
      },
      {path: "Cart", element: <Cart/>},
      {path: "Shop/:name", element: <Prodcut/>},
      {path: "NewArrival", element: <Home to='NewArrival'/>},
      {path: "TopSelling", element: <Home to='TopSelling'/>},
      {path: "OnSale", element: <Home to='OnSale'/>},
    ]
  },
]);



function App() {
  const MyCursor = useRef()
  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    if(MyCursor){
      MyCursor.current.animate({
        left: `${x-4}px`,
        top: `${y-4}px`
      },{duration:700 , fill:'forwards', easing:'ease-in-out'})
    }
  
  }
  return (
    <div onMouseMove={handleMouseMove}>
      {/* dont forget add to xsm:block down here */}
      <div ref={MyCursor} className='hidden w-2 h-2 bg-black rounded-full z-huge pointer-events-none fixed MyCursor' />
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
