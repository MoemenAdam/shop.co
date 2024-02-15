import React from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import RateCost from './RateCost'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";




export default function ShowProductsByType({Products}) {
  const navigate = useNavigate()
  
  const handleClick = (name) => {
    return () => {
      navigate(`/Shop/${name}`)
    }
  }

  return (
    <div className='flex justify-between mainMargin gap-5'>
      <div className='p-4 gap-5 rounded-xl h-fit border-2 flex flex-col min-w-[300px]'>
        <div className='flex justify-between'>
          <p className='font-bold text-2xl'>Filters</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
      </svg>
        </div>
        <hr />
        <div className='flex flex-col gap-3'>
          <div className='flex justify-between'>
            <p className='font-bold text-xl'>Casual</p>
            <MdKeyboardArrowUp />
          </div>
          <div className='flex justify-between'>
            <p>All</p>
            <MdKeyboardArrowRight />
          </div>
          <div className='flex justify-between'>
            <p>T-shirts</p>
            <MdKeyboardArrowRight />
          </div>
          <div className='flex justify-between'>
            <p>Shirts</p>
            <MdKeyboardArrowRight />
          </div>
          <div className='flex justify-between'>
            <p>Jeans</p>
            <MdKeyboardArrowRight />
          </div>
          <div className='flex justify-between'>
            <p>Shorts</p>
            <MdKeyboardArrowRight />
          </div>
        </div>
        <hr />
        <div></div>
        <div></div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className='flex justify-center flex-wrap gap-3 h-fit'>
          {
            Products.map((el,index) => {
              return(
                <motion.div 
                  variants={{
                    visible:{opacity:1, x:0},
                    hidden:{opacity:0, x:-75}
                  }}
                  transition={{delay:index*0.1,type:'just'}}
                  initial='hidden'
                  animate='visible'
                  className="flex flex-col w-[220px] h-full" key={index}>
                  <div className="bg-gray-100 rounded-xl">
                    <motion.img
                    whileHover={{scale:1.2,rotate:index&1?10:-10}}
                    onClick={handleClick(el.name)}
                    className="w-full h-[220px]" draggable="false" src={el.src} alt={el.src} />
                  </div>
                  <RateCost name={el.name} stars={el.stars} cost={el.cost} discount={el.discount}/>
                </motion.div>
              )
            })
          }
      </div>
    </div>
  )
}
