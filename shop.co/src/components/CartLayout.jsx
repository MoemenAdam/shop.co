import React, { useState } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion'
import AddToCart from '../store/AddToCart';
import Img from './Img';

export default function CartLayout({item,setCart,setCost}) {
  const [ ShowName, setShowName ] = useState(false)
  const handleQuantityChange = (num)=>{
    AddToCart(item,setCart,setCost,num)
  }
  const handleDelete = ()=>{
    AddToCart(item,setCart,setCost,-item.Quantity)
  }
  return (
    <div className=' gap-y-10 flex-wrap flex justify-between'>
        <div className='flex flex-wrap gap-3'>
          <div className='bg-gray-100 cart:block flex justify-center items-center cart:flex-shrink-0 flex-grow h-fit'><Img className='cart:w-32 cart:h-32' src={item.src} img={item.src?.split('/').pop().split('.')[0]}  alt="" from='cart'/></div>
          <div className='flex flex-col justify-between'>
            <div className='flex flex-col'>
              <h1 className='font-bold text-2xl overflow-hidden w-[190px]' style={{textOverflow:'ellipsis',whiteSpace:'nowrap'}} onClick={()=>setShowName(pre=>!pre)} title={item.name}>{item.name}</h1>
              <AnimatePresence>{ShowName&&<motion.div
                initial={{opacity:0,y:-10}}
                animate={{opacity:1,y:-30}}
                exit={{opacity:0,y:-10}}
              className='absolute text-xs bg-black text-white p-2'>{item.name}</motion.div>}</AnimatePresence>
              <p>Size: {item.size}</p>
              <p>Color: {item.color}</p>
            </div>
            <div className='font-bold text-2xl'>${item.cost}</div>
          </div>
        </div>
        <div className='relative flex-grow cart2:flex-grow-0 items-end flex flex-col justify-end'>
        <FaRegTrashAlt onClick={handleDelete} size={20} color='red' className='cursor-pointer absolute -top-10 cart2:top-0 right-0 font-extrabold '/>
          <div className='rounded-full w-full select-none xsm:p-0 flex justify-center items-center gap-5 bg-gray-100'>
            <span onClick={()=>handleQuantityChange(-1)} className='text-4xl -mt-1 px-3 py-1 flex-grow cursor-pointer text-center'>-</span>
            <span className='font-bold'>{item.Quantity}</span>
            <span onClick={()=>handleQuantityChange(1)} className='text-4xl -mt-1 px-3 py-1 flex-grow cursor-pointer text-center'>+</span>
          </div>
        </div>
    </div>
  )
}
