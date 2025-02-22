import { GrLanguage } from "react-icons/gr"
import { VscWorkspaceTrusted } from "react-icons/vsc"
import { Link } from "react-router-dom"

const Header2 = () => {
    return (
        <div className="h-8 border-b-black text-black/50 text-[12px] flex items-center justify-evenly border-b border-b-black/20">
            <div className="flex gap-2">
                <Link to="#" className="hover:text-red-500"><h1>আমাদের সম্পর্কে</h1></Link>
                <Link to="#" className="hover:text-red-500"><h1>পছন্দের তালিকা</h1></Link>
                <Link to="#" className="hover:text-red-500"><h1>তুলনা করুন</h1></Link>
            </div>
            <div className="flex items-center gap-1">
            <VscWorkspaceTrusted />
                <h1>১০০% নিরাপদ ও বিশ্বস্ত অনলাইন শপিং | নিরাপদ ও নিশ্চিত হোম ডেলিভারি</h1>
            </div>

            <div className="flex gap-1 items-center">
                <GrLanguage />
                <h1>ভাষা :</h1>
                <select className="border rounded px-2 py-1 bg-white">
                    <option value="bn">বাংলা</option>
                </select>
            </div>

        

        </div>
    )
}

export default Header2