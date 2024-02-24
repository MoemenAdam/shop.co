import { useEffect, useState, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import RateCost from "./RateCost";
import { useNavigate } from "react-router-dom";
import { Products } from "../store/Constants";
import Img from "./Img";

export default function ImgSlider({type,del='no',id}) {
  const [Width, setWidth] = useState(0)
  const navigate = useNavigate()
  const ref = useRef()

  const mainDiv = useRef()
  const inView = useInView(mainDiv, {once:true})
  const MainControls = useAnimation()

  const ProductsByType = Products.filter(el => el.type === type && (del==='no'?1:el.id!==id))

  useEffect(()=>{
    if(inView){
      MainControls.start('visible')
    }
  },[inView,MainControls])
  useEffect(()=>{
    const timer = setTimeout(() => {
      setWidth(ref.current.scrollWidth - ref.current.offsetWidth)
    }, 1);
    return ()=>{
      clearTimeout(timer);
    }
  },[])

  const handleClick = (name) => {
    return () => {
      navigate(`/Shop/${name}`)
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
          ProductsByType.map((el,index) => {
              return (
                <motion.div key={index} whileTap={{ scale: 0.95 }}>
                  <motion.div 
                    variants={{
                      visible:{opacity:1, x:0},
                      hidden:{opacity:0, x:-75}
                    }}
                    transition={{delay:index*0.1,type:'just'}}
                    initial='hidden'
                    animate={MainControls}
                    className="flex flex-col w-[250px] h-full">
                      <motion.div 
                      whileHover={{scale:1.2,rotate:index&1?10:-10}}
                      className="bg-gray-100 rounded-xl select-none"
                        onClick={handleClick(el.name)}>
                        <Img 
                        img={
                          el.src.split('/').pop().split('.')[0]==='Vector'?'BlackStar'
                          :el.src.split('/').pop().split('.')[0]==='Main'?'ManAndWomen'
                          :el.src.split('/').pop().split('.')[0]==='order_confirmed'?'Confirm'
                          :el.src.split('/').pop().split('.')[0]==='undraw_shopping_app_flsj'?'Empty'
                          :el.src.split('/').pop().split('.')[0]==='Undraw404'?'Error'
                          :el.src.split('/').pop().split('.')[0]
                          
                        }
                        whileHover={{scale:1.2,rotate:index&1?10:-10}}
                        className="w-full h-[250px]" draggable="false" src={el.src} alt={el.src} />

                      </motion.div>
                      <RateCost name={el.name} stars={el.stars} cost={el.cost} discount={el.discount}/>
                  </motion.div>
                </motion.div>
              )
          })
        }
      </motion.div>
    </div>
  )
}
