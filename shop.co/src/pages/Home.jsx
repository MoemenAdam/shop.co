import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="pt-1 flex justify-between items-center min-h-100vh flex-wrap mainPadding">
      <div className="w-1/2 flex flex-col flex-grow">
        <h1 className="bolded text-3xl sm:text-6xl mb-10 max-w-[550px]">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="max-w-[550px]">
        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
        </p>
        <Link className="btn my-10 w-full lg:w-fit text-center" to='shop'>Shop Now</Link>
        <div className="flex flex-wrap justify-start items-center gap-10 text-center">
          <div className="flex-grow">
            <h1 className="font-bold text-3xl tracking-wide">200+</h1>
            <p>International Brands</p>
          </div>
          <div className="flex-grow">
            <h1 className="font-bold text-3xl tracking-wide">2,000+</h1>
            <p>High-Quality Products</p>
          </div>
          <div className="flex-grow">
            <h1 className="font-bold text-3xl tracking-wide">30,000+</h1>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="flex flex-grow relative">
          <img className="w-32 absolute right-0 hidden xsm:block" src="./Vector.png" alt="" />
        <img className="w-full h-full" src="./Main.png" alt="main" />
          <img className="w-12 absolute left-0 top-44 hidden xsm:block" src="./Vector.png" alt="" />
      </div>
    </div>
  )
}
