
import { useEffect } from 'react'
import { Products } from '../store/Constants'
import ShowProductsByType from '../components/ShowProductsByType'

export default function Shop() {
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return (
    <div>
      <ShowProductsByType Products={Products} />
    </div>
  )
}
