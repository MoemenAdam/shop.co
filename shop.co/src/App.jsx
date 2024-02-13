import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Error from "./pages/Error"
import Root from "./pages/Root"

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Root/>, 
    errorElement:<Error/>,
    children: [
      {path: "", element: <Home/>},
      {path: "NewArrival", element: <Home to='NewArrival'/>},
      {path: "TopSelling", element: <Home to='TopSelling'/>},
      {path: "OnSale", element: <Home to='OnSale'/>},
    ]
  },
]);


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
