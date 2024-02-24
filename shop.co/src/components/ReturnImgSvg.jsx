import Img1 from '../ImgToSvgs/Img1'
import Img2 from '../ImgToSvgs/Img2'
import Img3 from '../ImgToSvgs/Img3'
import Img4 from '../ImgToSvgs/Img4'
import Img5 from '../ImgToSvgs/Img5'
import Img6 from '../ImgToSvgs/Img6'
import Img7 from '../ImgToSvgs/Img7'
import Img8 from '../ImgToSvgs/Img8'
import Img9 from '../ImgToSvgs/Img9'
import Img10 from '../ImgToSvgs/Img10'
import Img11 from '../ImgToSvgs/Img11'
import Img12 from '../ImgToSvgs/Img12'
import Img13 from '../ImgToSvgs/Img13'
import Img14 from '../ImgToSvgs/Img14'
import BlackStar from '../ImgToSvgs/BlackStar'
import Empty from '../ImgToSvgs/Empty'
import Error from '../ImgToSvgs/Error'
import Confirm from '../ImgToSvgs/Confirm'
import ManAndWomen from '../ImgToSvgs/ManAndWomen'
import { useState } from 'react'
import { useEffect } from 'react'

export default function ReturnImgSvg(prop) {
  const [myImg, setMyImg] = useState();
  useEffect(()=>{
    if(prop.img==='1')setMyImg(<Img1 from={prop.from}/>)
    if(prop.img==='2')setMyImg(<Img2 from={prop.from}/>)
    if(prop.img==='3')setMyImg(<Img3 from={prop.from}/>)
    if(prop.img==='4')setMyImg(<Img4 from={prop.from}/>)
    if(prop.img==='5')setMyImg(<Img5 from={prop.from}/>)
    if(prop.img==='6')setMyImg(<Img6 from={prop.from}/>)
    if(prop.img==='7')setMyImg(<Img7 from={prop.from}/>)
    if(prop.img==='8')setMyImg(<Img8 from={prop.from}/>)
    if(prop.img==='9')setMyImg(<Img9 from={prop.from}/>)
    if(prop.img==='11')setMyImg(<Img10 from={prop.from}/>)
    if(prop.img==='12')setMyImg(<Img11 from={prop.from}/>)
    if(prop.img==='13')setMyImg(<Img12 from={prop.from}/>)
    if(prop.img==='14')setMyImg(<Img13 from={prop.from}/>)
    if(prop.img==='15')setMyImg(<Img14 from={prop.from}/>)
    if(prop.img==='BlackStar')setMyImg(<BlackStar from={prop.from}/>)
    if(prop.img==='ManAndWomen')setMyImg(<ManAndWomen from={prop.from}/>)
    if(prop.img==='Empty')setMyImg(<Empty from={prop.from}/>)
    if(prop.img==='Error')setMyImg(<Error from={prop.from}/>)
    if(prop.img==='Confirm')setMyImg(<Confirm from={prop.from}/>)
  },[prop.img])
  return (
    <>
      {myImg}
    </>
  )
}
