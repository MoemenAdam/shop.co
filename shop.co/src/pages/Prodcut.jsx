import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Products } from '../store/Constants'
import Page404 from './Page404'
import RateCost from '../components/RateCost'
import {motion} from "framer-motion"

export default function Prodcut() {
  const [MyProdcut, setMyProdcut] = useState({})
  const [VeriPos, setVeriPos] = useState(0)
  const { name } = useParams()
  
  useEffect(()=>{
    window.scrollTo(0,0)
    const test = name.replace(/[^a-zA-Z]/g, '').toLowerCase();
    const Filtered = Products.filter(e=> e.type!=='newarrival' && e.type!=='topselling' && e.type!=='onsale')
    const item = Filtered.find(e=> e.name.replace(/[^a-zA-Z]/g, '').toLowerCase() === test)
    setMyProdcut(item);
  },[name])

  const Veri = ()=>{
    return (
      <div className='flex justify-center items-center'>
        <svg className="text-white w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
        </svg>
      </div>
    )
  }

  if(!MyProdcut){
    return <Page404/>
  }

  // {src: '../5.png',id:'1', type:'newarrival', name: 'Vertical Striped Shirt', stars: 5, cost: 212, discount: 20}

  return (
    <div className='flex flex-wrap justify-center gap-x-10 mainMargin h-fit'>
      <div className='bg-gray-100 flex-grow rounded-xl flex justify-center items-center'>
        <img className='w-full h-fit' src={MyProdcut.src} alt='' />
      </div>
      <div className='relative'>
        <RateCost from='Prodcut' name={MyProdcut.name} stars={MyProdcut.stars} cost={MyProdcut.cost} discount={MyProdcut.discount} />
        <div className='mt-10'></div>
        <hr />
        <div className='absolute -translate-y-4 right-10 bg-white'>Select Colors</div>

        <div className='flex gap-3 items-end h-24'>
          <motion.div 
            initial={{opacity:0,x:-75}}
            animate={{opacity:1,x:0}}
            transition={{delay:0}}
          onClick={()=>{setVeriPos(pre=>(pre==1?0:1))}} className='bg-yellow-900 w-8 h-8 rounded-full cursor-pointer'>{VeriPos===1 && <Veri/>}</motion.div>
          <motion.div 
            initial={{opacity:0,x:-75}}
            animate={{opacity:1,x:0}}
            transition={{delay:0.1}}
          onClick={()=>{setVeriPos(pre=>(pre==2?0:2))}} className='bg-red-900 w-8 h-8 rounded-full cursor-pointer'>{VeriPos===2 && <Veri/>}</motion.div>
          <motion.div 
            initial={{opacity:0,x:-75}}
            animate={{opacity:1,x:0}}
            transition={{delay:0.2}}
          onClick={()=>{setVeriPos(pre=>(pre==3?0:3))}} className='bg-green-900 w-8 h-8 rounded-full cursor-pointer'>{VeriPos===3 && <Veri/>}</motion.div>
          <motion.div 
            initial={{opacity:0,x:-75}}
            animate={{opacity:1,x:0}}
            transition={{delay:0.3}}
          onClick={()=>{setVeriPos(pre=>(pre==4?0:4))}} className='bg-blue-900 w-8 h-8 rounded-full cursor-pointer'>{VeriPos===4 && <Veri/>}</motion.div>
        </div>
        

        <div className='mt-10'></div>
        <hr />
        <div className='absolute -translate-y-4 right-10 bg-white'>Choose Size</div>

      </div>
    </div>
  )
}
