import { useState, useContext, useEffect, useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { DrawerContext } from "../../cartDrawerProvider/CartDrawerProvider";
import useCarts from "../../hooks/useCarts/useCarts";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import useAdmin from "../../hooks/useAdmin/useAdmin";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { user, logOut } = useContext(AuthContext);
  const { openDrawer } = useContext(DrawerContext);
  const [carts, refetch] = useCarts();
  const menuRef = useRef(null);
  const [isAdmin] = useAdmin();


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  // Search function
  useEffect(() => {
  const fetchSearchResults = async () => {
    if (searchTerm.trim() !== "") {
      try {
        const response = await axiosPublic.get(`/search?query=${searchTerm}`);
        setSearchResults(response.data);  // data সরাসরি array হবে, তাই ঠিক আছে
      } catch (error) {
        console.error("Search error:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const debounceTimeout = setTimeout(() => {
    fetchSearchResults();
  }, 300);

  return () => clearTimeout(debounceTimeout);
}, [searchTerm, axiosPublic]);

  // Handle outside click to close search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchResults([]);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);


  // Navigate to product details
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
    setSearchResults([]);
    setSearchTerm("");
  };

  return (

    <div className="flex items-center justify-between gap-5 mx-3 md:mx-0">
      {/* Left */}
      <div>
        <Link to="/">
          <img src="logo.png" className=" h-16 md:h-20" alt="Logo" />
        </Link>
      </div>

      {/* Middle (Search Bar) */}
      <div className="hidden sm:block w-[200px] md:w-[400px] lg:w-[600px]">
        <div className="relative flex items-center border-none" ref={searchRef}>
          <input
            type="text"
            placeholder="প্রোডাক্ট সার্চ করুন"
            className="font-bangla input bg-[#F3F4F7] w-[200px] md:w-[400px] lg:w-[600px] rounded-l-lg h-12 text-sm border-none outline-none px-3 rounded-r-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-[#233A95] text-white flex items-center h-12 p-3 rounded-r-lg border-none outline-none">
            <IoSearchOutline className="text-3xl" />
          </button>

          {/* Search Results Dropdown */}
          {searchResults.length > 0 && (
            <div className="absolute top-14 left-0 w-full bg-white border rounded-lg shadow-lg z-50">
              {searchResults.map((product) => (
                <div
                  key={product._id}
                  className="p-3 cursor-pointer hover:bg-gray-100 flex items-center gap-3"
                  onClick={() => handleProductClick(product._id)}
                >
                  <img src={product.picture} alt={product.name} className="w-10 h-10 object-cover" />
                  <p>{product.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>


      {/* Right Side */}
      <div className="flex gap-2 md:gap-3 items-center">
        {/* Cart Icon */}
        <button onClick={openDrawer}>
          <div>
            <div className="relative w-fit opacity-80 cursor-pointer bg-[#F3F4F7] p-3 rounded-full">
              <FiShoppingCart className="md:text-2xl text-black" />
              <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-600 text-center text-[10px] text-white">
                {carts.length.toLocaleString('bn-BD')}
              </span>
            </div>
          </div>
        </button>

        {/* Currency Display */}
        <div className="flex items-center gap-1 text-sm md:text-md ">
          <h1 className="text-sm">৳</h1>
          <h1>{carts.reduce((total, item) => total + item.price, 0).toLocaleString("bn-BD", { minimumFractionDigits: 2 })}</h1>
        </div>

        {/* User Login Section */}
        <div className="relative" ref={menuRef}>
          {user ? (
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-0 md:gap-2 border border-black p-1 md:p-3 rounded-lg text-sm hover:scale-105 duration-300"
            >
              <FaRegUser className="text-md" />
              <p>{user.displayName}</p>
            </button>
          ) : (
            <Link to="/login">
              <div className="flex items-center gap-2 text-white bg-[#233A95] p-3 rounded-lg text-sm hover:scale-105 duration-300">
                <FaRegUser className="text-md" />
                <p>লগইন / নিবন্ধন</p>
              </div>
            </Link>
          )}

          {isOpen && user && (
            <div className="z-10 absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg">
              {
                isAdmin || <button
                  onClick={openDrawer}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  🛒 My Cart
                </button>
              }
              {
                isAdmin && <Link to="/dashboard">
                  <button
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    <div className="flex items-center gap-2">
                      <FaRegUser className="text-md" />
                      <h1>Admin Dashboard</h1>
                    </div>


                  </button>
                </Link>
              }

              <button
                onClick={logOut}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                🚪 Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;