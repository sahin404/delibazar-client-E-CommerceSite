import { Outlet } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import Header from "../components/nonShared/Header"
import Header2 from "../components/nonShared/Header2"

const Main = () => {
  return (
    <div>
      <div className="font-bangla">
        <Header></Header>
        <Header2></Header2>
        <div className="max-w-6xl mx-auto">
          <Navbar></Navbar>
          <Outlet></Outlet>
        </div>

      </div>
    </div>

  )
}

export default Main