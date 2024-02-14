import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { motion } from 'framer-motion'

export default function CartLayout({item}) {
  // [{"src":"../2.png","id":"11","type":"Jeans","name":"Skinny Fit Jeans","stars":3.5,"cost":240,"discount":20,"color":"Any","size":"","Quantity":1,"quantity":null},{"src":"../2.png","id":"11","type":"Jeans","name":"Skinny Fit Jeans","stars":3.5,"cost":240,"discount":20,"color":"Blue","size":"","Quantity":1}]
  const handleQuantityChange = (num)=>{
    
  }
  return (
    <div className='flex'>
      <div className='flex h-[150px] bg-red-500'>
        <div><img className='w-full h-full' src={item.src} alt="" /></div>
        <div>
          <div>
            <h1 className='font-bold text-3xl'>{item.name}</h1>
            <p>Size: {item.size}</p>
            <p>Color: {item.color}</p>
          </div>
          <div>${item.cost}</div>
        </div>
      </div>
      <div className='flex flex-col justify-between items-end'>
        <FaRegTrashAlt />
        <div className='flex flex-col xsm:flex-row flex-wrap mt-10 gap-10'>
          <motion.div
            initial={{opacity:0,x:-75}}
            animate={{opacity:1,x:0}}
            transition={{delay:0.3}}
           className='rounded-full select-none	 flex-grow xsm:flex-grow-0 p-3 xsm:p-0 xsm:w-[25%] flex justify-center items-center gap-5 bg-gray-100'>
            <span onClick={handleQuantityChange(-1)} className='text-4xl -mt-1 cursor-pointer flex-grow text-center'>-</span>
            <span className='font-bold'>1</span>
            <span onClick={handleQuantityChange(1)} className='text-4xl -mt-1 cursor-pointer flex-grow text-center'>+</span>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
