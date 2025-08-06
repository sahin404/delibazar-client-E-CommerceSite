import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "../components/shared/Navbar";
import Header from "../components/nonShared/Header";
import Header2 from "../components/nonShared/Header2";
import Footer from "../components/shared/Footer";
import MyCartDrawer from "../pages/MyCartDrawer/MyCartDrawer";
import { useQueryClient } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic/useAxiosPublic";

const Main = () => {
  const location = useLocation();
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const queryClient = useQueryClient();
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    // Prefetch popular products
    queryClient.prefetchQuery({
      queryKey: ["products", "popular"],
      queryFn: async () => {
        const res = await axiosPublic.get("/products/category/popular");
        return res.data;
      },
    });
  }, [queryClient, axiosPublic]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`font-bangla ${location.pathname === '/' ? 'bg-white' : 'bg-[#F3F4F7]'}`}>
        {location.pathname !== '/login' && location.pathname !== '/register' && <Header />}
        <div className="bg-white">
          {location.pathname !== '/login' && location.pathname !== '/register' && <Header2 />}
        </div>

        {/* Navbar with fixed position when scrolled */}
        <div className={`bg-white ${isNavbarFixed ? "fixed top-0 w-full shadow-md z-50" : ""}`}>
          <div className="max-w-6xl mx-auto">
            {location.pathname !== '/login' && location.pathname !== '/register' && <Navbar />}
          </div>
          <div className="border-b"></div>
        </div>

        {/* Page content */}
        <div className={`${isNavbarFixed ? "mt-16" : ""}`}>
          <Outlet />
        </div>

        {location.pathname !== '/login' && location.pathname !== '/register' && <Footer />}
      </div>

      <MyCartDrawer />
    </div>
  );
};

export default Main;
