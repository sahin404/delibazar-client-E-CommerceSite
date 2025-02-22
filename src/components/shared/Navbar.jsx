import { FaRegUser } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import { IoSearchOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className=" flex items-center justify-between gap-5 border-b">
      {/* Left */}
      <div className="">
        <Link to="/">
          <img src="logo.png" className="h-20" />
        </Link>
      </div>


      {/* Middle */}
      <div className="flex items-center border-none">
        <input
          type="text"
          placeholder="প্রোডাক্ট সার্চ করুন"
          className="font-bangla input bg-[#F3F4F7] rounded-l-lg h-12 w-[600px] text-sm border-none outline-none px-3 rounded-r-none"
        />
        <button className="bg-[#233A95] text-white flex items-center h-12 p-3 rounded-r-lg border-none outline-none">
          <IoSearchOutline className="text-3xl" />
        </button>
      </div>






      {/* Right Side */}
      <div className="flex gap-3 items-center gap-3">
        <div>
          <div className="relative w-fit opacity-80 cursor-pointer bg-[#F3F4F7] p-3 rounded-full">
            <FiShoppingCart className="text-2xl text-black" />
            <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-600 text-center text-[10px] text-white">১২</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <h1 className="text-sm">৳</h1>
          <h1>০০.০০</h1>
        </div>

        <div className="flex items-center gap-2 text-white bg-[#233A95] p-3 rounded-lg text-sm hover:scale-105 duration-300">
          <FaRegUser className="text-md" />
          <button className="">লগইন / নিবন্ধন</button>
        </div>
      </div>

    </div>
  )
}

export default Navbar