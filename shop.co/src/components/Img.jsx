import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Img({...prop}) {
  const imgSrc = prop.src?.split('/').pop()

  const [IsLoaded, setIsLoaded] = useState(false)
  return (
    <>
      <motion.img {...prop} src={`../min/min${imgSrc}`} style={{display:!IsLoaded?'block':'none'}}/>
      <motion.img onLoad={()=>setIsLoaded(true)} {...prop} style={{display:IsLoaded?'block':'none'}}/>
    </>
  )
}
