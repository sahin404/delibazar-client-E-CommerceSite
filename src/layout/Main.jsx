import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import Header from "../components/nonShared/Header"
import Header2 from "../components/nonShared/Header2"
import Header3 from "../components/nonShared/Header3"

const Main = () => {
  return (
    <div>
      <div className="font-bangla bg-[#F3F4F7]">
        <Header></Header>
        <div className="bg-white">
          <Header2></Header2>
        </div>
        <div className=" bg-white">
          <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Header3></Header3>
          </div>
          <div className="border-b">

          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <Outlet></Outlet>
        </div>

      </div>
    </div>

  )
}

export default Main