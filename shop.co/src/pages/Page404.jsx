import Undraw404 from "../components/Undraw404"
import {Link} from "react-router-dom"
import Reavel from "../Reavel"
import {motion} from "framer-motion"
export default function Page404() {
  return (
    <>
    <div className="bg-gray-100 relative -translate-y-3 min-h-100vh">
      <div className=" flex-col gap-y-20 nav:flex-row pt-10 pb-10 flex justify-between items-center min-h-100vh flex-wrap mainMargin">
          <div className="flex flex-col flex-grow">
            
              <h1 className="font-bold text-7xl sm:text-8xl mb-10 max-w-[450px]">
              <Reavel>404 Page</Reavel>
              </h1>
            
            <Reavel>
              <p className="max-w-[450px]">
              We cant seem to find page you are looking for


              </p>
            </Reavel>
            <div className="mt-10"></div>
            <Reavel className='btnReavel flex' btn='w-full nav:w-fit'>
              <Link className="btn w-full nav:w-fit text-center" to='/'>Back to home</Link>
            </Reavel>
          </div>
          <motion.div
            initial={{opacity:0, y:75}}
            animate={{opacity:1, y:0}} transition={{type:'just'}} 
            className="flex-grow relative w-full nav:w-fit">
            <Undraw404/>
          </motion.div>
        </div>
    </div>
    </>
  )
}
