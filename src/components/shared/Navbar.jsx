import { useState, useContext, useEffect, useRef } from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { DrawerContext } from "../../cartDrawerProvider/CartDrawerProvider";
import useCarts from "../../hooks/useCarts/useCarts";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();
  const { user, logOut } = useContext(AuthContext);
  const { openDrawer } = useContext(DrawerContext);
  const [carts, refetch] = useCarts();

  useEffect(() => {
    if (user) {
      refetch();
    }
  }, [user, refetch]);

  // Search function
  useEffect(() => {
    const fetchSearchResults = async () => {
      // console.log(searchTerm);
      if (searchTerm.trim() !== "") {
        try {
          const response = await axiosPublic.get(`/search?query=${searchTerm}`);
          setSearchResults(response.data);
        } catch (error) {
          console.error("Search error:", error);
        }
      } else {
        setSearchResults([]);
      }
    };

    const debounceTimeout = setTimeout(() => {
      fetchSearchResults();
    }, 300); // Debounce effect for better performance

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
    <div className="flex items-center justify-between gap-5">
      {/* Left */}
      <div>
        <Link to="/">
          <img src="logo.png" className="h-20" alt="Logo" />
        </Link>
      </div>

      {/* Middle (Search Bar) */}
      <div className="relative flex items-center border-none" ref={searchRef}>
        <input
          type="text"
          placeholder="প্রোডাক্ট সার্চ করুন"
          className="font-bangla input bg-[#F3F4F7] rounded-l-lg h-12 w-[600px] text-sm border-none outline-none px-3 rounded-r-none"
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

      {/* Right Side */}
      <div className="flex gap-3 items-center">
        {/* Cart Icon */}
        <button onClick={openDrawer}>
          <div>
            <div className="relative w-fit opacity-80 cursor-pointer bg-[#F3F4F7] p-3 rounded-full">
              <FiShoppingCart className="text-2xl text-black" />
              <span className="absolute -right-1 -top-2 flex size-5 items-center justify-center rounded-full bg-red-600 text-center text-[10px] text-white">
                {carts.length}
              </span>
            </div>
          </div>
        </button>

        {/* Currency Display */}
        <div className="flex items-center gap-1">
          <h1 className="text-sm">৳</h1>
          <h1>{carts.reduce((total, item) => total + item.price, 0).toLocaleString("bn-BD", { minimumFractionDigits: 2 })}</h1>
        </div>

        {/* User Login Section */}
        <div>
          {user ? (
            <button
              onClick={logOut}
              className="flex items-center gap-2 text-white bg-[#233A95] p-3 rounded-lg text-sm hover:scale-105 duration-300"
            >
              <FaRegUser className="text-md" />
              <p>লগআউট</p>
            </button>
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
