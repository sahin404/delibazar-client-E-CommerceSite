import Discount from "../Discount/Discount"
import HomeBody from "../HomeBody/HomeBody"

const Home = () => {
    return (
        <div className="bg-white">
            <HomeBody />
            <Discount></Discount>
        </div>
    )
}

export default Home