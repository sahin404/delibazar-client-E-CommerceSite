import { FaHome } from "react-icons/fa"
import { NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="flex gap-10 max-w-6xl mx-auto">

      <div className="bg-[#D1A054] w-64 min-h-screen " >

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
      <div className="flex-1 mt-10">

        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default Dashboard