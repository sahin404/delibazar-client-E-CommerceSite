import { FaHome } from "react-icons/fa"
import { Link, NavLink, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div className="flex gap-10">
            <div className="bg-[#D1A054] w-64 min-h-screen " >
                <ul className="menu text-xl">
                  <div>
                    <Link>Add products</Link>
                    <Link>Update Product</Link>
                    <Link>Delete products</Link>
                  </div>
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