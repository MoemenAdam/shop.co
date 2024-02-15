
import { useEffect } from 'react'
import { Products } from '../store/Constants'
import ShowProductsByType from '../components/ShowProductsByType'

export default function Shop() {
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return (
    <div>
      <h1 className='text-center text-4xl font-bold my-10'>Still working on it (you see every thing here is broken)</h1>
      <ShowProductsByType Products={Products} />
    </div>
  )
}
