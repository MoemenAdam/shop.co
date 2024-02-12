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
    ]
  },
]);


function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
