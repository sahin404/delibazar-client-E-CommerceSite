
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ShowEachProductOnCart = ({ product }) => {
    const { name, id, price, picture } = product;
    return (
        <div>
            
            <div className=" flex justify-between items-center gap-3">
            <div className="flex items-center gap-3">
                <div className=" w-14 h-14 border flex items-center">
                    <img src={picture} alt="" />
                </div>
                <div className="col-span-3">
                    <Link to={`/product/${id}`}>  <h1 className="hover:underline">{name}</h1></Link>
                    <h1>{price.toLocaleString("bn-BD")} ৳</h1>
                </div>
            </div>

            <div className="text-2xl">
                <button className="text-red-700"><MdDelete /></button>
            </div>
        </div>
        <hr />
        </div>
    )
}

export default ShowEachProductOnCart