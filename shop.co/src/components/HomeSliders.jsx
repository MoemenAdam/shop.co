import ImgSlider from './ImgSlider'

export default function HomeSliders({text,type,del='no',id}) {
  return (
    <div className='mainMargin pt-10'>
      <h1 className='bolded text-center text-3xl xsm:text-4xl'>{text}</h1>
      <ImgSlider type={type} del={del} id={id}/>
    </div>
  )
}
