import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import RateCost from './RateCost'
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { Products } from '../store/Constants'
import ReactSlider from 'react-slider'




export default function ShowProductsByType({MyProducts,setMyProducts}) {
  const [Type,setType] = useState(true);
  const [Price,setPrice] = useState(true);
  const [Colors,setColors] = useState(true);
  const [Style,setStyle] = useState(true);
  const [Filters,setFilters] = useState(true);
  const [value, setValue] = useState([0, 1000]);
  const navigate = useNavigate()
  
  const handleClick = (name) => {
    return () => {
      navigate(`/Shop/${name}`)
    }
  }

  const setProd = (type) => {
    const holder = Products.filter( e => e.type===type || e.type2===type)
    setMyProducts(holder);
    // console.log(type);
  }

  return (
    <div className='flex  flex-wrap shop:flex-nowrap mainMargin gap-2'>
      <div className='p-4 flex-grow gap-5 rounded-xl h-fit border-4 flex flex-col shop:max-w-[300px] shop:min-w-[300px]'>
        <div onClick={()=>setFilters(prev=>!prev)} className='cursor-pointer flex justify-between'>
          <p className='font-bold text-2xl'>Filters</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
      </svg>
        </div>
        {
          Filters&&<>
          <hr />
          <div className='flex flex-col gap-3 cursor-pointer'>
            <div className='flex justify-between' onClick={()=>setType(prev=>!prev)}>
              <p className='font-bold text-xl'>Type</p>
              <motion.div
                animate={{rotate:!Type?180:0,y:!Type?-10:0}}
              ><MdKeyboardArrowUp /></motion.div>
            </div>
            {
              Type&&<>
              <div onClick={()=>setProd('All')} className='flex justify-between cursor-pointer'>
                <p>All</p>
                <MdKeyboardArrowRight />
              </div>
              <div onClick={()=>setProd('T-shirt')} className='flex justify-between cursor-pointer'>
                <p>T-shirts</p>
                <MdKeyboardArrowRight />
              </div>
              <div onClick={()=>setProd('Shirts')} className='flex justify-between cursor-pointer'>
                <p>Shirts</p>
                <MdKeyboardArrowRight />
              </div>
              <div onClick={()=>setProd('Jeans')} className='flex justify-between cursor-pointer'>
                <p>Jeans</p>
                <MdKeyboardArrowRight />
              </div>
              <div onClick={()=>setProd('Shorts')} className='flex justify-between cursor-pointer'>
                <p>Shorts</p>
                <MdKeyboardArrowRight />
              </div></>
            }
          </div>
          <hr />
          <div className=' flex-col gap-3 cursor-pointer' onClick={()=>setPrice(prev=>!prev)}>
              <div className='flex justify-between'>
                <p className='font-bold text-xl'>Price</p>
                <motion.div
                  animate={{rotate:!Price?180:0,y:!Price?-10:0}}
                ><MdKeyboardArrowUp /></motion.div>
              </div>
                {
                  Price&&<>
                    <div className='mt-10'>
                    </div>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue={[0, 100]}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
                        pearling
                        minDistance={10}
                    />
                  </>
                }
          </div>
          <div className=' flex-col gap-3 cursor-pointer' onClick={()=>setColors(prev=>!prev)}>
              <div className='flex justify-between'>
                <p className='font-bold text-xl'>Colors</p>
                <motion.div
                  animate={{rotate:!Colors?180:0,y:!Colors?-10:0}}
                ><MdKeyboardArrowUp /></motion.div>
              </div>
                {
                  Colors&&<>
                    <p>Colors content</p>
                  </>
                }
          </div>
          <div className=' flex-col gap-3 cursor-pointer' onClick={()=>setStyle(prev=>!prev)}>
              <div className='flex justify-between'>
                <p className='font-bold text-xl'>Style</p>
                <motion.div
                  animate={{rotate:!Style?180:0,y:!Style?-10:0}}
                ><MdKeyboardArrowUp /></motion.div>
              </div>
                {
                  Style&&<div>
                    <p>Style content</p>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                }
          </div>
          </>
        }
      </div>
      <div className='flex flex-wrap gap-3 h-fit'>
          {
            MyProducts?.map((el,index) => {
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
                  <div className="bg-gray-100 rounded-xl cursor-pointer">
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
