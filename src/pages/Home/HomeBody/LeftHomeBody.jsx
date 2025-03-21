import { useState } from "react";
import { FaBaby } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import banner from "../../../assets/banner/v1.png";

const LeftHomeBody = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("popular");

  const handleButton = (name) => {
    setCategory(name);
    setActiveCategory(name);
  };

  return (
    <div className="w-full md:w-64"> {/* Use full width on smaller screens, and 64 width on medium screens and up */}
      <ul className="space-y-2 pl-4 pt-2">
        {[{ name: "popular", label: "🎩 জনপ্রিয়" },
          { name: "grocery", label: <><MdOutlineLocalGroceryStore /> মুদিখানা</> },
          { name: "snacks", label: "🍪 স্ন্যাকস" },
          { name: "cosmetics", label: "💄 কসমেটিক্স" },
          { name: "beverages", label: "🍷 বেভারেজ" },
          { name: "dairy_products", label: "🐄 ডেয়ারি প্রোডাক্টস" },
          { name: "bakery_items", label: "🎂 বেকারি আইটেম" },
          { name: "health_safety", label: <><FaBaby /> স্বাস্থ্য ও সুরক্ষা</> },
          { name: "baby_care", label: "🚼 বেবি কেয়ার" },
          { name: "cooking_ingredients", label: "👩‍🍳 রান্নার উপকরণ" },
          { name: "cleaning_hygiene", label: "🧹 পরিষ্কার পরিচ্ছন্নতা" }]
          .map((item) => (
            <li key={item.name}>
              <button
                className={`flex items-center gap-2 w-full px-4 py-2 rounded-md transition-all duration-200 
                ${activeCategory === item.name ? "bg-red-500 text-white" : "bg-gray-200 text-gray-700"}`}
                onClick={() => handleButton(item.name)}
              >
                {item.label}
              </button>
            </li>
          ))}
      </ul>
      <div className="p-5">
        <img src={banner} alt="Banner" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default LeftHomeBody;
