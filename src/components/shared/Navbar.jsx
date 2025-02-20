import { FaRegUser } from "react-icons/fa"
import { FiShoppingCart } from "react-icons/fi"
import { IoCallOutline, IoSearchOutline } from "react-icons/io5"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-[#A31D1D] flex items-center justify-center py-3">
      <Link to="/">
        <img src="logo-1.png" className="h-16" />
      </Link>

      <div className="flex items-center border-none">
        <input type="text" placeholder="প্রোডাক্ট সার্চ করুন" className="input rounded-r-none rounded-l-xl h-11 w-80 text-sm focus:none" />
        <button className="bg-[#FFD814] h-11 p-2 rounded-r-xl">
          <IoSearchOutline className="text-3xl " />
        </button>
      </div>
      <div>
        <div className="relative w-fit opacity-80">
          <FiShoppingCart className="text-2xl text-white" />
          <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-[#FFD814] text-center text-[10px] text-black">12</span>
        </div>
      </div>
      <div className="flex items-center text-white opacity-80 gap-1 border p-2 rounded-xl">
        <IoCallOutline className="text-2xl" />
        <h1>যোগাযোগ</h1>
      </div>
      <div className="border p-2 rounded-xl text-white text-sm flex items-center gap-1 opacity-80">
        <FaRegUser className="text-xl" />
        <div>লগইন / নিবন্ধন</div>

      </div>

      <div>

      </div>

    </div>
  )
}

export default Navbar