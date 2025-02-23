import { Link } from "react-router-dom"
import { FaBaby} from 'react-icons/fa';
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import banner from '../../../assets/banner/v1.png'
const LeftHomeBody = () => {
  return (
    <div>
      <ul className="space-y-4 pl-10 pt-2">
      <li><Link to="#"><div className="flex gap-2">🎩 জনপ্রিয়</div></Link></li>
        <li><Link to="#"><div className="flex gap-2"><MdOutlineLocalGroceryStore /> মুদিখানা</div></Link></li>
        <li><Link to="#"><div className="flex gap-2">🍪 স্ন্যাকস</div></Link></li>
        <li><Link to="#"><div className="flex gap-2">🏼 কসমেটিক্স</div></Link></li>
        <li><Link to="#"><div className="flex gap-2">🍷 বেভারেজ</div></Link></li>
        <li><Link to="#"><div className="flex gap-2">🐄 ডেয়ারি প্রোডাক্টস</div></Link></li>
        <li><Link to="#"><div className="flex gap-2">🎂 বেকারি আইটেম</div></Link></li>
        <li><Link to="#"><div className="flex gap-2"><FaBaby /> স্বাস্থ্য ও সুরক্ষা</div></Link></li>
        <li><Link to="#"><div className="flex gap-2">🚼 বেবি কেয়ার</div></Link></li>
        <li><Link to="#"><div className="flex gap-2">👩‍🍳 রান্নার উপকরণ</div></Link></li>
        <li><Link to="#"><div className="flex gap-2">🧹 পরিষ্কার পরিচ্ছন্নতা</div></Link></li>
      </ul>

      <div className="p-5">
        <img src={banner} alt="" />
      </div>

    </div>
  )
}

export default LeftHomeBody