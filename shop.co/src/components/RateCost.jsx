import Reavel from "../Reavel"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function RateCost({from='Home',name,stars=5,cost,discount=0}) {
  return (
    <div className={`${from==='Home'?'flex flex-col justify-between h-full':''}`}>
      <div>
      <Reavel>
        <h1 className={`font-bold ${from!='Home'?'bolded text-4xl max-w-[600px] sm:text-5xl':'text-xl'}`}>{name}</h1>
      </Reavel>
      </div>
      <div>
      <div className={`${from!='Home'?'mt-3':''}`}></div>
      <Reavel>
        <div className="flex items-center gap-2">
            <div className="flex">
              {
                Array(Math.floor(stars)).fill().map((_,index) => {
                  return(
                    <div className="flex flex-row" key={index}>
                      {
                        index<stars && <FaStar  color='black' />
                      }
                      {
                        index+1 === Math.floor(stars) && stars%1!==0 && <FaStarHalfAlt  color='black' />
                      }
                    </div>
                  )
                })
              }
            </div>
            {stars}
            /
            <span className="text-gray-500">5</span>
        </div>
      </Reavel>
      <div className={`${from!='Home'?'mt-3':''}`}></div>
      <Reavel>
        <div className={`flex gap-1 ${from!='Home'?'text-2xl gap-3':''}`}>
            <span className='font-bold'>${cost}</span>
          {
            discount>0 && <>
              <div className="flex">
                  <del className='text-gray-400'>${cost + cost*discount/100}</del>
                  <span className='bg-red-100 px-3 ml-3 rounded-full text-red-400'>-{discount}%</span>
              </div>
            </>
          }

        </div>
      </Reavel>
      </div>
    </div>
  )
}
