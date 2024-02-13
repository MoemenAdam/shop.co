import Reavel from "../Reavel"
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

export default function RateCost({name,stars,cost,discount=0}) {
  return (
    <div>
      <Reavel>
        <h1 className='font-bold text-xl'>{name}</h1>
      </Reavel>
      <div className="flex items-center gap-2">
        <Reavel>
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
        </Reavel>
        <Reavel>
          {stars}
          /
          <span className="text-gray-500">5</span>
        </Reavel>
      </div>
      <div className="flex gap-1">
        <Reavel>
          <span className='font-bold'>${cost}</span>
        </Reavel>
        {
          discount>0 && <>
            <div className="flex">
              <Reavel>
                <del className='brightness-75'>${cost + cost*discount/100}</del>
              </Reavel>
              <Reavel>
                <span className='bg-red-100 px-3 ml-3 rounded-full text-red-400'>-{discount}%</span>
              </Reavel>
            </div>
          </>
        }

      </div>
    </div>
  )
}
