import { useContext, useEffect, useRef } from "react";
import { DrawerContext } from "../../cartDrawerProvider/CartDrawerProvider";
import { ImCancelCircle } from "react-icons/im";
import useCarts from "../../hooks/useCarts/useCarts";

const MyCartDrawer = () => {
  const { isOpen, closeDrawer } = useContext(DrawerContext);
  const drawerRef = useRef(null);
  const [carts, refetch] = useCarts();

  useEffect(() => {
    if (isOpen) {
      refetch(); // Trigger refetch when the drawer opens
    }
  }, [isOpen, refetch]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        closeDrawer();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, closeDrawer]);

  // Calculate total price
  const totalPrice = carts.reduce((total, item) => total + item.price, 0);

  return (
    <div className={`fixed inset-0 z-50 bg-black transition-all duration-500 ${isOpen ? "bg-opacity-50" : "bg-opacity-0 pointer-events-none"}`}>
      <div
        ref={drawerRef}
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg flex flex-col transition-all duration-500 ease-out transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* 🔝 Top Section */}
        <div className="bg-yellow-400 p-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">কার্টে পণ্য: {carts.length.toLocaleString("bn-BD")} টি</h2>
          <button onClick={closeDrawer} className="text-gray-600 hover:text-black flex gap-1 items-center">
            <ImCancelCircle className="text-xl" />
            <div>
              বন্ধ করুন
            </div>

          </button>
        </div>

        {/* 🛒 Middle Section - Product List (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {carts.length > 0 ? (
            carts.map((item) => <div>hi</div>)
          ) : (
            <p className="text-center text-gray-500">কার্ট খালি!</p>
          )}
        </div>

        {/* 🔻 Bottom Section */}
        <div className="bg-red-500 p-4 flex justify-between items-center text-white">
          <h2 className="text-lg font-bold">মোট: {totalPrice.toLocaleString("bn-BD")}৳</h2>
          <button className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200">পেমেন্ট করুন</button>
        </div>
      </div>
    </div>
  );
};

export default MyCartDrawer;
