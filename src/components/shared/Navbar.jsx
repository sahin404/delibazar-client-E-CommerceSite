import { useState, useContext, useEffect, useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const dropdownRef = useRef(null); // Added reference to the dropdown

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    logOut();
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex items-center justify-between gap-5">
      {/* Left */}
      <div>
        <Link to="/">
          <img src="logo.png" className="h-20" alt="Logo" />
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
      <div className="flex gap-3 items-center">
        {/* Cart Icon */}
        <Link to="/cart">
          <div>
            <div className="relative w-fit opacity-80 cursor-pointer bg-[#F3F4F7] p-3 rounded-full">
              <FiShoppingCart className="text-2xl text-black" />
              <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-600 text-center text-[10px] text-white">১২</span>
            </div>
          </div>
        </Link>

        {/* Currency Display */}
        <div className="flex items-center gap-1">
          <h1 className="text-sm">৳</h1>
          <h1>০০.০০</h1>
        </div>

        {/* User Login Section */}
        <div>
          {user ? (
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={handleDropdownToggle}
                className="border p-2 border-black rounded-xl flex items-center gap-2"
              >
                {user.displayName}
                <FaRegUser className="text-md" />
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-lg w-48 p-3 z-10">
                  <Link to="/cart">
                    <button className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-200 rounded-lg">
                      My Cart
                    </button>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left py-2 px-4 text-sm hover:bg-gray-200 rounded-lg mt-2"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <div className="flex items-center gap-2 text-white bg-[#233A95] p-3 rounded-lg text-sm hover:scale-105 duration-300">
                <FaRegUser className="text-md" />
                <p>লগইন / নিবন্ধন</p>
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
