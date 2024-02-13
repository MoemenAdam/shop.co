import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import RateCost from "./RateCost";
import { useNavigate } from "react-router-dom";

const imgDetails = [
  {src: './1.png', type:'newarrival', name: 'T-shirt with Tape Details', stars: 4.5, cost: 120, discount: 0},
  {src: './2.png', type:'newarrival', name: 'Skinny Fit Jeans', stars: 3.5, cost: 240, discount: 20},
  {src: './3.png', type:'newarrival', name: 'Checkered Shirt', stars: 4.5, cost: 180, discount: 0},
  {src: './4.png', type:'newarrival', name: 'Sleeve Striped T-shirt', stars: 4.5, cost: 130, discount: 30},
  {src: './5.png', type:'newarrival', name: 'Vertical Striped Shirt', stars: 5, cost: 212, discount: 20},

  {src: './5.png', type:'topselling', name: 'Vertical Striped Shirt', stars: 5, cost: 212, discount: 20},
  {src: './3.png', type:'topselling', name: 'Checkered Shirt', stars: 4.5, cost: 180, discount: 0},
  {src: './6.png', type:'topselling', name: 'Courage Graphic T-shirt', stars: 4, cost: 145, discount: 0},
  {src: './7.png', type:'topselling', name: 'Loose Fit Bermuda Shorts', stars: 4.5, cost: 240, discount: 20},
  {src: './8.png', type:'topselling', name: 'Faded Skinny Jeans', stars: 4.5, cost: 210, discount: 0},
]

export default function ImgSlider({type}) {
  const [Width, setWidth] = useState(0)
  const navigate = useNavigate()
  const ref = useRef()

  const mainDiv = useRef()
  const inView = useInView(mainDiv, {once:true})
  const MainControls = useAnimation()

  const imgDetailsByType = imgDetails.filter(el => el.type === type)

  useEffect(()=>{
    if(inView){
      MainControls.start('visible')
    }
  },[inView])
  useEffect(()=>{
    setWidth(ref.current.scrollWidth - ref.current.offsetWidth)
  },[])

  const handleClick = (name) => {
    return () => {
      navigate(`/product/${name}`)
    }
  }

  return (
    <div className="overflow-hidden mt-10" ref={ref}>
      <motion.div
        drag='x'
        dragConstraints={{left:-Width, right:0}}
        whileTap={{ cursor: "grabbing" }}
        ref={mainDiv}
      className="flex gap-5 cursor-pointer w-fit">
        {
          imgDetailsByType.map((el,index) => {
              return (
                <motion.div 
                  variants={{
                    visible:{opacity:1, x:0},
                    hidden:{opacity:0, x:-75}
                  }}
                  transition={{delay:index*0.1,type:'just'}}
                  initial='hidden'
                  animate={MainControls}
                  className="flex flex-col w-[250px] h-full" key={index}>
                    <motion.img
                    whileHover={{scale:1.2,rotate:index&1?10:-10}}
                    onClick={handleClick(el.name)}
                    className="w-full h-[250px]" draggable="false" src={el.src} alt={el.src} />
                    <RateCost name={el.name} stars={el.stars} cost={el.cost} discount={el.discount}/>
                </motion.div>
              )
          })
        }
      </motion.div>
    </div>
  )
}
