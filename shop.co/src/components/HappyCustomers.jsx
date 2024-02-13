import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import Reavel from '../Reavel'
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
const reviews = [
  {name:'Sarah M.', review:"Im blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."},
  {name:'Alex K.', review:"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."},
  {name:'James L.', review:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."},
  {name:'Mooen', review:"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends."},
  {name:'Samantha D.', review:"m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."},
]

export default function HappyCustomers() {
  const [Width, setWidth] = useState(0)
  const ref = useRef()
  
  useEffect(()=>{
    setWidth(ref.current.scrollWidth - ref.current.offsetWidth)
  },[])

  return (
    <div className='mainMargin pb-10 pt-20'>
      <h1 className='bolded text-3xl xsm:text-5xl'>OUR HAPPY CUSTOMERS</h1>
      <div className="overflow-hidden mt-10" ref={ref}>
      <motion.div
          drag='x'
          dragConstraints={{left:-Width, right:0}}
          whileTap={{ cursor: "grabbing" }}
        className="flex gap-16 cursor-pointer w-fit mt-10">
          {
            reviews.map((el,index) => {
                return (
                  <div key={index} className='flex flex-col gap-2 w-[350px]'>
                    <Reavel>
                      <div className='flex gap-2'>
                        <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                      </div>
                    </Reavel>
                    <Reavel>
                      <div className='flex gap-1 items-center'>
                        <h1 className='font-bold text-lg'>{el.name}</h1>
                        <MdVerified size={20} color='green'/>
                      </div>
                    </Reavel>
                    <Reavel>
                      <p className='w-full h-full'>{el.review}</p>
                    </Reavel>
                  </div>
                )
            })
          }
        </motion.div>
      </div>
    </div>
  )
}
