import { useEffect, useRef, memo } from 'react'

import {Link} from 'react-router-dom'
import Reavel from '../Reavel'
import {motion} from 'framer-motion'
import BrandsBar from '../components/BrandsBar'
import HomeSliders from '../components/HomeSliders'
import HappyCustomers from '../components/HappyCustomers'
import Img from '../components/Img'

export default function Home({to = ''}) {
  const NewArrival = useRef()
  const TopSelling = useRef()
  const OnSale = useRef()


  useEffect(()=>{
    if(to === ''){
      window.scrollTo({
        top:0,
        behavior:'smooth'
      })
      return;
    }
    if(to === 'NewArrival'){
      window.scrollTo({
        top:NewArrival.current.offsetTop,
        behavior:'smooth'
      })
    }else if(to === 'TopSelling'){
      window.scrollTo({
        top:TopSelling.current.offsetTop,
        behavior:'smooth'
      })
    }else if(to === 'OnSale'){
      window.scrollTo({
        top:OnSale.current.offsetTop,
        behavior:'smooth'
      })
    }

  },[to])

  return (
    <>
      <div className=" pt-1 nav:flex flex-wrap justify-between items-end mainPadding">
        <div className="nav:w-1/2 flex flex-col flex-grow">
          
            <h1 className="bolded text-3xl sm:text-6xl mb-10 max-w-[550px]">
            <Reavel>FIND CLOTHES</Reavel> <Reavel>THAT MATCHES</Reavel> <Reavel>YOUR STYLE</Reavel>
            </h1>
          
          <Reavel>
            <p className="max-w-[550px]">
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </p>
          </Reavel>
          <div className='mt-10'></div>
          <Reavel className='btnReavel flex' btn='w-full lg:w-fit'>
            <Link className="btn w-full lg:w-fit text-center" to='Shop'>Shop Now</Link>
          </Reavel>
          <div className='mb-10'></div>
          <div className="flex mb-10 flex-wrap justify-start items-center gap-10">
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
        <div className="flex justify-end flex-grow relative">
            <Img
            initial={{opacity:0, y:75}}
            animate={{opacity:1, y:0}} transition={{type:'just'}} className="w-32 absolute right-0 hidden xsm:block z-10" src="./Vector.png" alt="" img="BlackStar" />
            <Img
            initial={{opacity:0, y:75}}
            animate={{opacity:1, y:0}}transition={{type:'just'}} className="w-full h-full" src="./Main.png" alt="main" img="ManAndWomen" />
            <Img
            initial={{opacity:0, y:75}}
            animate={{opacity:1, y:0}} transition={{type:'just'}} className="w-12 absolute left-0 top-44 hidden xsm:block z-10" src="./Vector.png" alt="" img="BlackStar" />
        </div>
      </div>
      <BrandsBar />
      <div ref={NewArrival}>
        <HomeSliders text='NEW ARRIVALS' type='newarrival' />
      </div>
      <div ref={TopSelling}>
        <HomeSliders text='TOP SELLING' type='topselling' />
      </div>
      <div ref={OnSale}>
        <HomeSliders text='ON SALE' type='onsale' />
      </div>
      <HappyCustomers />
    </>
  )
}
