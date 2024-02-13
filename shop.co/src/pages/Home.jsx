import {Link} from 'react-router-dom'
import Reavel from '../Reavel'
import {motion} from 'framer-motion'
import BrandsBar from '../components/BrandsBar'
import HomeSliders from '../components/HomeSliders'
import HappyCustomers from '../components/HappyCustomers'
export default function Home() {
  return (
    <>
      <div className="pt-1 flex justify-between items-center min-h-100vh flex-wrap mainPadding">
        <div className="w-1/2 flex flex-col flex-grow">
          <Reavel>
            <h1 className="bolded text-3xl sm:text-6xl mb-10 max-w-[550px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
          </Reavel>
          <Reavel>
            <p className="max-w-[550px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
          </Reavel>
          <div className='mt-10'></div>
          <Reavel className='btnReavel flex' btn='w-full lg:w-fit'>
            <Link className="btn w-full lg:w-fit text-center" to='shop'>Shop Now</Link>
          </Reavel>
          <div className='mb-10'></div>
          <div className="flex flex-wrap justify-start items-center gap-10">
            <div className="flex-grow flex flex-col justify-center items-center">
              <Reavel>
                <h1 className="font-bold text-3xl tracking-wide">200+</h1>
              </Reavel>
              <Reavel>
                <p>International Brands</p>
              </Reavel>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center">
              <Reavel>
                <h1 className="font-bold text-3xl tracking-wide">2,000+</h1>
              </Reavel>
              <Reavel>
                <p>High-Quality Products</p>
              </Reavel>
            </div>
            <div className="flex-grow flex flex-col justify-center items-center">
              <Reavel>
                <h1 className="font-bold text-3xl tracking-wide">30,000+</h1>
              </Reavel>
              <Reavel>
                <p>Happy Customers</p>
              </Reavel>
            </div>
          </div>
        </div>
        <div className="flex flex-grow relative">
            <motion.img
            initial={{opacity:0, y:75}}
            animate={{opacity:1, y:0}} transition={{type:'just'}} className="w-32 absolute right-0 hidden xsm:block z-10" src="./Vector.png" alt="" />
          <motion.img
            initial={{opacity:0, y:75}}
            animate={{opacity:1, y:0}}transition={{type:'just'}} className="w-full h-full" src="./Main.png" alt="main" />
            <motion.img
            initial={{opacity:0, y:75}}
            animate={{opacity:1, y:0}} transition={{type:'just'}} className="w-12 absolute left-0 top-44 hidden xsm:block z-10" src="./Vector.png" alt="" />
        </div>
      </div>
      <BrandsBar />
      <HomeSliders text='NEW ARRIVALS' type='newarrival' />
      <HomeSliders text='TOP SELLING' type='topselling' />
      <HappyCustomers />
    </>
  )
}
