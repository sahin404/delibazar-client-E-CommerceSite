import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"

const Main = () => {
  return (
    <div>
      <div className="bg-[#A31D1D]">
        <div className="max-w-7xl mx-auto">
          <Navbar></Navbar>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>

  )
}

export default Main