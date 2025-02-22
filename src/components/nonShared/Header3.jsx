import { IoIosArrowDropdown } from "react-icons/io"
import { MdMenu } from "react-icons/md"

const Header3 = () => {
    return (
        <div className="my-5">
            <button className="bg-[#233A95] text-white py-3 px-6 text-xl rounded-2xl flex items-center gap-2">
                <MdMenu />
                <h1>ক্যাটাগোরি</h1>
                <IoIosArrowDropdown className="ml-8"/>
            </button>
        </div>
    )
}

export default Header3