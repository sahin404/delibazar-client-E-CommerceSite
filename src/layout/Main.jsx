import { Outlet, useLocation } from "react-router-dom"
import Navbar from "../components/shared/Navbar"
import Header from "../components/nonShared/Header"
import Header2 from "../components/nonShared/Header2"
import Footer from "../components/shared/Footer"
import MyCartDrawer from "../pages/MyCartDrawer/MyCartDrawer"

const Main = () => { 
  const location = useLocation();
  // console.log(location);
  return (
    <div>
      <div className={`font-bangla ${location.pathname === '/' ? 'bg-white' : 'bg-[#F3F4F7]'}`}>
        {location.pathname!='/login' && location.pathname!='/register' &&  <Header></Header>}
        <div className="bg-white">
        {location.pathname!='/login' && location.pathname!='/register' &&  <Header2></Header2>}
        </div>
        <div className=" bg-white">
          <div className="max-w-6xl mx-auto">
          {location.pathname!='/login' && location.pathname!='/register' &&  <Navbar></Navbar>}
          </div>
          <div className="border-b">

          </div>
        </div>
        <div className="">
          <Outlet></Outlet>
        </div>
        {location.pathname!='/login' && location.pathname!='/register' &&  <Footer></Footer>}
      </div>
      <MyCartDrawer></MyCartDrawer>
    </div>

  )
}

export default Main