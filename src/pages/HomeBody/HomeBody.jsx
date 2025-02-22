import LeftHomeBody from "./LeftHomeBody"
import RightHomeBody from "./RightHomeBody"

const HomeBody = () => {
    return (
        <div className="grid grid-cols-4">
            {/* Left Side */}
            <div className="col-span-1 border border-t-0">
                <LeftHomeBody></LeftHomeBody>
            </div>
            {/* Right Side */}
            <div>
                <RightHomeBody></RightHomeBody>
            </div>
        </div>
    )
}

export default HomeBody