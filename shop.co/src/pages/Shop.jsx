
import { useEffect } from 'react'
import { Products } from '../store/Constants'

export default function Shop() {
  useEffect(()=>{
    const timer = setTimeout(() => {
      window.scrollTo(0,0)
    }, 100);
    return () => clearTimeout(timer)
  },[])
  return (
    <div>
      {
        Products.map((el, i) => {
          return (
            <div key={i} className="flex flex-wrap gap-5">
              <div className="w-1/3">
                <img src={el.src} alt={el.name} />
              </div>
              <div className="w-2/3">
                <h1>{el.name}</h1>
                <p>{el.cost}</p>
                <p>{el.discount}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
