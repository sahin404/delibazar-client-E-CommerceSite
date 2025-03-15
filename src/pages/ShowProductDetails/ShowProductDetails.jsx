import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import { FaHeadset, FaLeaf, FaLock, FaShippingFast, FaUndo } from "react-icons/fa";

const ShowProductDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        const fetchItems = async () => {
            const response = await axiosPublic.get(`/product/${id}`)
            setProduct(response.data);
        }
        fetchItems();
    }, [axiosPublic, id])
    const { name, picture, price, stock_status, _id, category, description } = product;
    return (
        <div className="max-w-6xl mx-auto py-14 flex justify-center items-center gap-10 bg-white p-5">
            <div className="">
                <img className="max-h-[400px]" src={picture} alt="" />
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <h1 className="text-2xl font-semibold text-[#EF4444]">দামঃ {price} ৳</h1>
                <p className="text-xs font-semibold md:text-sm">স্ট্যাটাস: {stock_status === 'in_stock' ? "স্টকে আছে" : "স্টকে নাই"}</p>
                <h1>
                    {description}
                </h1>
                <div className="flex items-center gap-3 flex-wrap">

                    <Link to={`/product/${_id}`}><button className="rounded-lg bg-[#233A95] px-14 py-2 text-white duration-300 hover:scale-105 ">কিনুন</button></Link>
                    <button className="rounded-lg bg-[#EF4444] px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:"> + ব্যাগে যোগ করুন</button>
                </div>
                <div className="">
                    <h1 className="mb-3">Product Tag</h1>
                    <span className="bg-blue-500 p-1 bg-opacity-50 rounded-lg">{category}</span>
                </div>

            </div>
            <div>
                <div className="bg-gray-100 p-4 rounded-md shadow-sm max-w-sm mx-auto space-y-3">
                    <div className="flex items-center space-x-2">
                        <FaShippingFast className="text-blue-500 text-xl" />
                        <p className="text-gray-700 text-xs">১০০০ ডলারের বেশি অর্ডারে ফ্রি শিপিং</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaLeaf className="text-green-500 text-xl" />
                        <p className="text-gray-700 text-xs">১০০% জৈবিক, প্রাকৃতিক খামার থেকে গ্যারান্টিযুক্ত</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaUndo className="text-red-500 text-xl" />
                        <p className="text-gray-700 text-xs">মন পরিবর্তন করলে ১ দিনের মধ্যে ফেরত দিন</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaLock className="text-yellow-500 text-xl" />
                        <p className="text-gray-700 text-xs">১০০% নিরাপদ পেমেন্টের নিশ্চয়তা</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaHeadset className="text-purple-500 text-xl" />
                        <p className="text-gray-700 text-xs">২৪/৭ কাস্টমার সাপোর্ট, আমরা সবসময় আছি আপনার পাশে</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ShowProductDetails