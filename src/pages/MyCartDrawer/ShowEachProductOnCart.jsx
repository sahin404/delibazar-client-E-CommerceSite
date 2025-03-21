
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosPublic/useAxiosSecure";
import useCarts from "../../hooks/useCarts/useCarts";

const ShowEachProductOnCart = ({ product }) => {
    const { name, id, price, picture, _id } = product;
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCarts();

    const handleCartDelete = () => {
        axiosSecure.delete(`/cart/${_id}`)
            .then(res => {
                if (res.data.deletedCount > 0) {
                    refetch();
                }
            })
    }
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
                    <button onClick={handleCartDelete} className="text-red-700"><MdDelete /></button>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default ShowEachProductOnCart