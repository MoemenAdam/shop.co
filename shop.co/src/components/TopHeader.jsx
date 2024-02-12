import { Link } from "react-router-dom"
export default function topHeader() {
  return (
    <header className=" bg-black p-2 font-thin text-white text-center">
      <span className="mr-2">Best fashion, unbeatable prices.</span>
      <Link className="font-bold underline underline-offset-4" to='shop'>Shop Now!</Link>
    </header>
  )
}
