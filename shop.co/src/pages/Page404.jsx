import Undraw404 from "../components/Undraw404"
import {Link} from "react-router-dom"
import Reavel from "../Reavel"
import {motion} from "framer-motion"
export default function Page404() {
  return (
    <div className="mainMargin flex-col-reverse lg:flex-row flex items-center">
    <div className="text-center flex flex-col items-center gap-5">
      <Reavel><h1 className="bolded text-4xl xsm:text-5xl">Your Cart is Empty!</h1></Reavel>
      <Reavel><p>Must add items on the card before you proceed to checkout</p></Reavel>
      <Reavel className="p-4"><Link className="btn w-fit" to='/Shop'>Go to Shop</Link></Reavel>
    </div>
    <div>
      <motion.div
        initial={{opacity:0, y:75}}
        animate={{opacity:1, y:0}} transition={{type:'just'}} 
        className="flex-grow relative w-full nav:w-fit">
          <img src="../Undraw404.png" alt="" />
      </motion.div>
    </div>
  </div>
  )
}
