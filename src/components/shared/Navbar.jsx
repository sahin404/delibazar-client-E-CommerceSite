import { FaRegUser } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import { IoCallOutline, IoLanguageSharp, IoSearchOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-[#A31D1D] flex items-center justify-center py-3">
      {/* Left */}
      <div>
        <Link to="/">
          <img src="logo-1.png" className="h-16" />
        </Link>
      </div>


      {/* Middle */}
      <div className="flex items-center border-none">
        <input type="text" placeholder="প্রোডাক্ট সার্চ করুন" className="input rounded-r-none rounded-l-xl h-11 w-80 text-sm focus:none" />
        <button className="bg-[#FFD814] h-11 p-2 rounded-r-xl">
          <IoSearchOutline className="text-3xl " />
        </button>
      </div>
      {/* Right Side */}
      <div className="flex gap-3 items-center">
        <div>
          <div className="relative w-fit opacity-80 cursor-pointer">
            <FiShoppingCart className="text-2xl text-white" />
            <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-[#FFD814] text-center text-[10px] text-black">12</span>
          </div>
        </div>
        <div className="flex items-center text-white/90 gap-1 border border-white/50 p-2 rounded-xl text-sm cursor-pointer hover:bg-white/30 duration-100">
          <IoLanguageSharp className="text-xl" />
          <h1>ভাষা</h1>
        </div>
        <div className="flex items-center text-white/90 gap-1 border border-white/50 p-2 rounded-xl text-sm hover:bg-white/30 duration-100 cursor-pointer">
          <IoCallOutline className="text-xl" />
          <h1>যোগাযোগ</h1>
        </div>
        <div className="border p-2 rounded-xl text-white/90 gap-1 border-white/50 text-sm flex items-center hover:bg-white/30 duration-100 cursor-pointer">
          <FaRegUser className="text-xl" />
          <div>লগইন / নিবন্ধন</div>

        </div>
      </div>

    </div>
  )
}

export default Navbar