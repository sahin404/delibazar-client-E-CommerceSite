import { FaHome } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="flex gap-10 max-w-6xl mx-auto">

      {/* Left Section */}
      <div className="bg-[#D1A054] w-64 min-h-screen fixed" >
        <ul className="menu text-xl space-y-3">
          <li>
            <NavLink to="/dashboard" end>Product List</NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/users">User List</NavLink>
          </li>
          <div className="divider"></div>
          <li><NavLink to="/">
            <FaHome></FaHome>
            Go to Home
          </NavLink></li>
        </ul>

      </div>

      {/* Right Section */}
      <div className="flex-1 mt-10 ml-72">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard