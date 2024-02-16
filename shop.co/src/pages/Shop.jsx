
import { useEffect, useState } from 'react'
import { Products } from '../store/Constants'
import ShowProductsByType from '../components/ShowProductsByType'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";


export default function Shop() {
  const [ MyProducts,setMyProducts ] = useState(Products.filter( e => e.type2==='All'));
  useEffect(()=>{
    window.scrollTo(0,0)

  },[])
  return (
    <div>
      <div className='flex mainMargin items-center gap-4'>
        <Link to='/' className='text-gray-400'>Home</Link>
        <IoIosArrowForward color='gray'/>
        <p className=''>Shop</p>
      </div>
      <ShowProductsByType MyProducts={MyProducts} setMyProducts={setMyProducts} />
    </div>
  )
}
