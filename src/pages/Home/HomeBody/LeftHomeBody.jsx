import { useState } from "react";
import { FaBaby } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import banner from "../../../assets/banner/v1.png";

const LeftHomeBody = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("popular");
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = (name) => {
    setCategory(name);
    setActiveCategory(name);
  };

  return (
    <div className="w-full md:w-44 lg:w-64 p-2 md:p-0">
      {/* Dropdown Button for Small Devices */}
      <div className="sm:hidden mb-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-gray-300 text-gray-700 p-2 rounded-md flex justify-between items-center text-sm md:text-[16px]"
        >
          ক্যাটাগরি
          <span>{isOpen ? "▲" : "▼"}</span>
        </button>
      </div>

      {/* Dropdown Content (Hidden on Small Devices) */}
      <div className={`${isOpen ? "block" : "hidden"} sm:block`}>
        <ul className="space-y-2 md:pl-4 pt-2">
          {[
            { name: "popular", label: "🎩 জনপ্রিয়" },
            { name: "grocery", label: <><MdOutlineLocalGroceryStore /> মুদি</> },
            { name: "snacks", label: "🍪 স্ন্যাকস" },
            { name: "cosmetics", label: "💄 কসমেটিক্স" },
            { name: "beverages", label: "🍷 বেভারেজ" },
            { name: "dairy_products", label: "🐄 ডেয়ারি প্রোডাক্টস" },
            { name: "bakery_items", label: "🎂 বেকারি আইটেম" },
            { name: "health_safety", label: <><FaBaby /> স্বাস্থ্য ও সুরক্ষা</> },
            { name: "baby_care", label: "🚼 বেবি কেয়ার" },
            { name: "cooking_ingredients", label: "👩‍🍳 রান্নার উপকরণ" },
            { name: "cleaning_hygiene", label: "🧹 পরিষ্কার পরিচ্ছন্নতা" }
          ].map((item) => (
            <li key={item.name}>
              <button
                className={`text-xs md:text-[16px] flex items-center gap-2 w-full px-1 md:px-4 py-1 md:py-3 rounded-md transition-all duration-200 
                ${activeCategory === item.name ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => {
                  handleButton(item.name);
                  setIsOpen(false); // Close dropdown after selection
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Banner */}
        
      </div>
      <div className="p-2 md:p-5">
          <img src={banner} alt="Banner" className="w-full rounded-lg" />
        </div>
    </div>
  );
};

export default LeftHomeBody;
