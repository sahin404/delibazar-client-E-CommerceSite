import { FaBaby } from 'react-icons/fa';
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import banner from '../../../assets/banner/v1.png'
const LeftHomeBody = () => {
  const handleButton = (name) => {
    console.log(name);
  }
  return (
    <div>
      <ul className="space-y-4 pl-10 pt-2">
        <li><button className="flex gap-2" onClick={() => handleButton('popular')}>🎩 জনপ্রিয়</button></li>

        <li><button className="flex gap-2" onClick={() => handleButton('grocery')}><MdOutlineLocalGroceryStore /> মুদিখানা</button></li>
        <li><button className="flex gap-2" onClick={() => handleButton('snacks')}>🍪 স্ন্যাকস</button></li>
        <li><button className="flex gap-2" onClick={() => handleButton('cosmetics')}>🏼 কসমেটিক্স</button></li>
        <li><button className="flex gap-2" onClick={() => handleButton('beverages')}>🍷 বেভারেজ</button></li>
        <li><button className="flex gap-2" onClick={() => handleButton('dairy_products')}>🐄 ডেয়ারি প্রোডাক্টস</button></li>
        <li><button className="flex gap-2" onClick={() => handleButton('bakery_items')}>🎂 বেকারি আইটেম</button></li>
        <li><button className="flex gap-2" onClick={() => handleButton('health_safety')}><FaBaby /> স্বাস্থ্য ও সুরক্ষা</button></li>
        <li><button className="flex gap-2" onClick={() => handleButton('baby_care')}>🚼 বেবি কেয়ার</button></li>
        <li><button className="flex gap-2" onClick={() => handleButton('cooking_ingredients')}>👩‍🍳 রান্নার উপকরণ</button></li>
        <li><button className="flex gap-2" onClick={() => handleButton('cleaning_hygiene')}>🧹 পরিষ্কার পরিচ্ছন্নতা</button></li>
      </ul>
      <div className="p-5">
        <img src={banner} alt="" />
      </div>

    </div>
  )
}

export default LeftHomeBody