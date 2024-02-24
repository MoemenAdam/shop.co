import { useEffect, useState, useReducer } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import RateCost from './RateCost'
import { MdKeyboardArrowUp } from "react-icons/md";
import ReactSlider from 'react-slider'
import Img from './Img';




const updateArrows = (state, action) => {
  switch (action.type) {
    case 'type':
      return {...state,type:!state.type}
    case 'price':
      return {...state,price:!state.price}
    case 'colors':
      return {...state,colors:!state.colors}
    case 'style':
      return {...state,style:!state.style}
    case 'filter':
      return {...state,filter:!state.filter}
    default:
      return state
  }
}
const updateFilters = (state, action) => {
  switch (action.type) {
    case 'type':
      return {...state,type:action.value}
    case 'price':
      return {...state,price:action.value}
    case 'colors':
      return {...state,colors:action.value}
    case 'colorbg':
        return {...state,colorsbg:action.value}
    case 'style':
      return {...state,style:action.value}
    default:
      return state
  }
}

const updateStyleCheckBox = (state, action) => {
  switch (action.type) {
    case 'cb1':
      return {cb1:!state.cb1,cb2:false,cb3:false,cb4:false}
    case 'cb2':
      return {cb1:false,cb2:!state.cb2,cb3:false,cb4:false}
    case 'cb3':
      return {cb1:false,cb2:false,cb3:!state.cb3,cb4:false}
    case 'cb4':
      return {cb1:false,cb2:false,cb3:false,cb4:!state.cb4}
    default:
      return state
  }
}
const updateTypeCheckBox = (state, action) => {
  switch (action.type) {
    case 'cb2':
      return {cb1:false,cb2:!state.cb2,cb3:false,cb4:false,cb5:false}
    case 'cb3':
      return {cb1:false,cb2:false,cb3:!state.cb3,cb4:false,cb5:false}
    case 'cb4':
      return {cb1:false,cb2:false,cb3:false,cb4:!state.cb4,cb5:false}
    case 'cb5':
      return {cb1:false,cb2:false,cb3:false,cb4:false,cb5:!state.cb5}
    default:
      return state
  }
}


const filterClothes = (clothes, typeFilter, minPrice, maxPrice, styleFilter) => {
  return clothes.filter(item => {
    // Filter by type
    if (typeFilter  && item.type !== typeFilter) {
      return false;
    }

    // Filter by price range
    if (minPrice && item.cost < minPrice) {
      return false;
    }
    if (maxPrice && item.cost > maxPrice) {
      return false;
    }

    // Filter by style
    if (styleFilter && item.style !== styleFilter && item.style2 !== styleFilter) {
      return false;
    }

    return true;
  });
};

export default function ShowProductsByType({MyProducts,setMyProducts}) {
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search);

  const initFilltersArrows = {
    type:true,
    price:true,
    colors:true,
    colorsbg:true,
    style:true,
    filter:true
  }
  const initStyleCheckBox = {
    cb1:queryParams.get('style')=='Casual'||false,
    cb2:queryParams.get('style')=='Formal'||false,
    cb3:queryParams.get('style')=='Party'||false,
    cb4:queryParams.get('style')=='Gym'||false,
  }
  const initTypeCheckBox = {
    cb2:queryParams.get('type')=='T-shirts'||false,
    cb3:queryParams.get('type')=='Shirts'||false,
    cb4:queryParams.get('type')=='Jeans'||false,
    cb5:queryParams.get('type')=='Shorts'||false,
  }
  const initFillters = {
    type:queryParams.get('type') || '',
    price:[parseInt(queryParams.get('min'))||0,parseInt(queryParams.get('max'))||500],
    colorsbg:queryParams.get('colorbg') || 0,
    style:queryParams.get('style') || ''
  }

  const [Arrows , setArrows] = useReducer(updateArrows,initFilltersArrows)
  const [Filters , setFilters] = useReducer(updateFilters,initFillters)
  const [StyleCheckBox, setStyleCheckBox] = useReducer(updateStyleCheckBox,initStyleCheckBox)
  const [TypeCheckBox, setTypeCheckBox] = useReducer(updateTypeCheckBox,initTypeCheckBox)
  const [PriceRange, setPriceRange] = useState([Filters.price[0],Filters.price[1]])
  const [Products, setProducts] = useState(MyProducts)
  
  useEffect(()=>{
    const holder = filterClothes(MyProducts, Filters.type, Filters.price[0], Filters.price[1], Filters.style);
    setProducts(holder);
  },[Filters,MyProducts])

  useEffect(()=>{
    if(!StyleCheckBox.cb1 && !StyleCheckBox.cb2 && !StyleCheckBox.cb3 && !StyleCheckBox.cb4){
      queryParams.delete('style');
      navigate(`?${queryParams.toString()}`);
      setFilters({type:'style',value:''})
    }
    const value = StyleCheckBox.cb1?'Casual':StyleCheckBox.cb2?'Formal':StyleCheckBox.cb3?'Party':StyleCheckBox.cb4?'Gym':'';
    if(value)handleFiltersChange('style',value);
  },[StyleCheckBox])

  useEffect(()=>{
    if(!TypeCheckBox.cb2 && !TypeCheckBox.cb3 && !TypeCheckBox.cb4 && !TypeCheckBox.cb5){
      queryParams.delete('type');
      navigate(`?${queryParams.toString()}`);
      setFilters({type:'type',value:''})
    }
    const value = TypeCheckBox.cb2?'T-shirts':TypeCheckBox.cb3?'Shirts':TypeCheckBox.cb4?'Jeans':TypeCheckBox.cb5?'Shorts':'';
    if(value)handleFiltersChange('type',value);
  },[TypeCheckBox])

  const updateQueryParams = (newParams) => {
    const mergedParams = new URLSearchParams({
      ...Object.fromEntries(queryParams), // Convert existing query parameters to object
      ...newParams // Merge new parameters
    });
    navigate(`/Shop?${mergedParams.toString()}`);
  };

  const handleFiltersChange = (type,value)=>{
    switch (type) {
      case 'type':
        updateQueryParams({ type: value });
        break;
      case 'price':
        updateQueryParams({ min: value[0], max: value[1] });
        break;
      case 'colorbg':
        updateQueryParams({ colorbg: value });
        break;
      case 'style':
        updateQueryParams({ style: value });
        break;
      default:
        break;
    }

    setFilters({type,value})
  }

  const handleClick = (name) => {
    return () => {
      navigate(`/Shop/${name}`)
    }
  }

  const Veri = ()=>{
    return (
      <div className='flex justify-center items-center'>
        <svg className="text-white w-6 h-6 mt-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" >
          <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
        </svg>
      </div>
    )
  }

  return (
    <div className='flex flex-wrap shop:flex-nowrap mainMargin gap-5'>
      <div className='p-4 flex-grow gap-5 rounded-xl h-fit border-4 flex flex-col shop:max-w-[300px] shop:min-w-[300px]'>
        <div onClick={()=>setArrows({type:'filter'})} className='select-none cursor-pointer flex justify-between'>
          <p className='font-bold text-2xl'>Filters</p>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M6 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 1 1 1.5 0v7.5A.75.75 0 0 1 6 12ZM18 12a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 18 12ZM6.75 20.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM18.75 18.75v1.5a.75.75 0 0 1-1.5 0v-1.5a.75.75 0 0 1 1.5 0ZM12.75 5.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.75.75 0 0 0 1.5 0ZM12 21a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v7.5A.75.75 0 0 1 12 21ZM3.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM12 11.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5ZM15.75 15a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
      </svg>
        </div>
        {
          Arrows.filter&&<>
          <hr />
          <div className='flex flex-col gap-3'>
            <div className='flex justify-between cursor-pointer' onClick={()=>setArrows({type:'type'})}>
              <p className='font-bold text-xl select-none'>Type</p>
              <motion.div
                animate={{rotate:!Arrows.type?180:0,y:!Arrows.type?-10:0}}
              ><MdKeyboardArrowUp /></motion.div>
            </div>
            {
              Arrows.type&&<div className='flex flex-col justify-between gap-5'>
              <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.05}} className='flex justify-between cursor-pointer'>
                <p>T-shirts</p>
                <input type="checkbox" checked={TypeCheckBox.cb2} onChange={()=>setTypeCheckBox({type:'cb2'})} />
              </motion.div>
              <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.06}} className='flex justify-between cursor-pointer'>
                <p>Shirts</p>
                <input type="checkbox" checked={TypeCheckBox.cb3} onChange={()=>setTypeCheckBox({type:'cb3'})} />
              </motion.div>
              <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.07}} className='flex justify-between cursor-pointer'>
                <p>Jeans</p>
                <input type="checkbox" checked={TypeCheckBox.cb4} onChange={()=>setTypeCheckBox({type:'cb4'})} />
              </motion.div>
              <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.08}} className='flex justify-between cursor-pointer'>
                <p>Shorts</p>
                <input type="checkbox" checked={TypeCheckBox.cb5} onChange={()=>setTypeCheckBox({type:'cb5'})} />
              </motion.div></div>
            }
          </div>
          <hr />
          <div className=' flex-col gap-3'>
              <div className='flex justify-between cursor-pointer' onClick={()=>setArrows({type:'price'})}>
                <p className='font-bold text-xl select-none'>Price</p>
                <motion.div
                  animate={{rotate:!Arrows.price?180:0,y:!Arrows.price?-10:0}}
                ><MdKeyboardArrowUp /></motion.div>
              </div>
                {
                  Arrows.price&&<motion.div
                  initial={{x:-500,opacity:0}}
                  animate={{x:0,opacity:1}}
                  transition={{duration:0.1,type:'spring'}}
                  className='cursor-pointer select-none my-7'>
                    <ReactSlider
                        className="horizontal-slider"
                        thumbClassName="example-thumb"
                        trackClassName="example-track"
                        defaultValue={[Filters.price[0], Filters.price[1]]}
                        min={0}
                        max={500}
                        ariaLabel={['Lower thumb', 'Upper thumb']}
                        ariaValuetext={state => `Thumb value ${state.valueNow}`}
                        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div> }
                        pearling
                        onChange={(value)=>setPriceRange(value)}
                        minDistance={100}
                    />
                  </motion.div>
                }
                <div onClick={()=>handleFiltersChange('price',PriceRange)} className='flex justify-center items-center'>
                  <button className='btn flex justify-center items-center'>Aply</button>
                </div>
          </div>
          <div className=' flex-col gap-3'>
              <div className='flex justify-between cursor-pointer' onClick={()=>setArrows({type:'colors'})}>
                <p className='font-bold text-xl select-none'>Colors</p>
                <motion.div
                  animate={{rotate:!Arrows.colors?180:0,y:!Arrows.colors?-10:0}}
                ><MdKeyboardArrowUp /></motion.div>
              </div>
                {
                  Arrows.colors&&<motion.div
                  initial={{x:-500,opacity:0}}
                  animate={{x:0,opacity:1}}
                  transition={{duration:0.1,type:'spring'}}
                  className='flex flex-col justify-between gap-5 mb-5'>
                    <div className='flex gap-3 flex-wrap mt-10'>
                    <motion.div 
                        initial={{opacity:0,x:-75}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:0.0}}
                      onClick={()=>handleFiltersChange('colorbg','1')} className='bg-yellow-900 w-8 h-8 rounded-full cursor-pointer'>{Filters.colorsbg==='1' && <Veri/>}</motion.div>
                      <motion.div 
                        initial={{opacity:0,x:-75}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:0.1}}
                      onClick={()=>handleFiltersChange('colorbg','2')} className='bg-red-900 w-8 h-8 rounded-full cursor-pointer'>{Filters.colorsbg==='2' && <Veri/>}</motion.div>
                      <motion.div 
                        initial={{opacity:0,x:-75}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:0.2}}
                      onClick={()=>handleFiltersChange('colorbg','3')} className='bg-green-900 w-8 h-8 rounded-full cursor-pointer'>{Filters.colorsbg==='3' && <Veri/>}</motion.div>
                      <motion.div 
                        initial={{opacity:0,x:-75}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:0.3}}
                      onClick={()=>handleFiltersChange('colorbg','4')} className='bg-blue-900 w-8 h-8 rounded-full cursor-pointer'>{Filters.colorsbg==='4' && <Veri/>}</motion.div>
                      <motion.div 
                        initial={{opacity:0,x:-75}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:0.4}}
                      onClick={()=>handleFiltersChange('colorbg','5')} className='bg-yellow-500 w-8 h-8 rounded-full cursor-pointer'>{Filters.colorsbg==='5' && <Veri/>}</motion.div>
                      <motion.div 
                        initial={{opacity:0,x:-75}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:0.5}}
                      onClick={()=>handleFiltersChange('colorbg','6')} className='bg-red-500 w-8 h-8 rounded-full cursor-pointer'>{Filters.colorsbg==='6' && <Veri/>}</motion.div>
                      <motion.div 
                        initial={{opacity:0,x:-75}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:0.6}}
                      onClick={()=>handleFiltersChange('colorbg','7')} className='bg-green-500 w-8 h-8 rounded-full cursor-pointer'>{Filters.colorsbg==='7' && <Veri/>}</motion.div>
                      <motion.div 
                        initial={{opacity:0,x:-75}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:0.7}}
                      onClick={()=>handleFiltersChange('colorbg','8')} className='bg-blue-500 w-8 h-8 rounded-full cursor-pointer'>{Filters.colorsbg==='8' && <Veri/>}</motion.div>
                      <motion.div 
                        initial={{opacity:0,x:-75}}
                        animate={{opacity:1,x:0}}
                        transition={{delay:0.8}}
                      onClick={()=>handleFiltersChange('colorbg','9')} className='bg-black w-8 h-8 rounded-full cursor-pointer'>{Filters.colorsbg==='9' && <Veri/>}</motion.div>
                    </div>
                  </motion.div>
                }
          </div>
          <div className='flex justify-between flex-col gap-3'>
              <div className='flex justify-between cursor-pointer' onClick={()=>setArrows({type:'style'})}>
                <p className='font-bold text-xl select-none'>Dress Style</p>
                <motion.div
                  animate={{rotate:!Arrows.style?180:0,y:!Arrows.style?-10:0}}
                ><MdKeyboardArrowUp /></motion.div>
              </div>
                <div>{
                  Arrows.style&&<div className='flex flex-col gap-5'>
                    <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.05}} className='flex justify-between cursor-pointer'>
                      <div>Casual</div>
                      <input type="checkbox" checked={StyleCheckBox.cb1} onChange={()=>setStyleCheckBox({type:'cb1'})} />
                    </motion.div>
                    <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.06}}  className='flex justify-between cursor-pointer'>
                      <div>Formal</div>
                      <input type="checkbox" checked={StyleCheckBox.cb2} onChange={()=>setStyleCheckBox({type:'cb2'})} />
                    </motion.div>
                    <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.07}}  className='flex justify-between cursor-pointer'>
                      <div>Party</div>
                      <input type="checkbox" checked={StyleCheckBox.cb3} onChange={()=>setStyleCheckBox({type:'cb3'})} />
                    </motion.div>
                    <motion.div initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{delay:0.08}} className='flex justify-between cursor-pointer'>
                      <div>Gym</div>
                      <input type="checkbox" checked={StyleCheckBox.cb4} onChange={()=>setStyleCheckBox({type:'cb4'})} />
                    </motion.div>
                  </div>
                }</div>
          </div>
          </>
        }
      </div>
      <div className='flex flex-col justify-center flex-grow flex-wrap gap-3 h-fit'>
        <h1 className='ml-10 mt-5 text-3xl font-bold'>{Filters.type?Filters.type:'All'} {Filters.style?'->':''} {Filters.style}  </h1>
          <div className='flex justify-center flex-grow flex-wrap gap-3 h-fit'>
            {
              Products.length?Products.map((el,index) => {
                return(
                  <motion.div key={index} whileTap={{ scale:0.95 }}>
                    <motion.div 
                      variants={{
                        visible:{opacity:1, x:0},
                        hidden:{opacity:0, x:-75}
                      }}
                      transition={{delay:index*0.1,type:'just'}}
                      initial='hidden'
                      animate='visible'
                      className="flex flex-col w-[250px] h-[350px]">
                      <motion.div className="bg-gray-100 rounded-xl cursor-pointer select-none" onClick={handleClick(el.name)}
                      
                      whileHover={{scale:1.2,rotate:index&1?10:-10}}
                      >
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
                        className=" w-full h-full " draggable="false" src={el.src} alt={el.src} />
                      </motion.div>
                      <RateCost name={el.name} stars={el.stars} cost={el.cost} discount={el.discount}/>
                    </motion.div>
                  </motion.div>
                )
              }):<h1 className='text-3xl mt-10 font-bold'>Sorry nothing here...</h1>
            }
          </div>
          
      </div>
    </div>
  )
}
