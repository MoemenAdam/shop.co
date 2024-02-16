
import { useEffect, useState } from 'react'
import { Products } from '../store/Constants'
import ShowProductsByType from '../components/ShowProductsByType'

export default function Shop() {
  const [ MyProducts,setMyProducts ] = useState(Products.filter( e => e.type2==='All'));
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return (
    <div>
      <h1 className='text-center text-4xl font-bold my-10'>Still working on it (you see every thing here is broken)</h1>
      <ShowProductsByType MyProducts={MyProducts} setMyProducts={setMyProducts} />
    </div>
  )
}
