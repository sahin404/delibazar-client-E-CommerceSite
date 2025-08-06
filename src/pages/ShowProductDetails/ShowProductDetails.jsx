import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic/useAxiosPublic";
import { FaHeadset, FaLeaf, FaLock, FaShippingFast, FaUndo } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import LoginModal from "../../components/nonShared/LoginModal";
import useAxiosSecure from "../../hooks/useAxiosPublic/useAxiosSecure";
import { toast, ToastContainer } from "react-toastify";
import { DrawerContext } from "../../cartDrawerProvider/CartDrawerProvider";
import useCarts from "../../hooks/useCarts/useCarts";

const ShowProductDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const [product, setProduct] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const { user } = useContext(AuthContext);
    const { openDrawer } = useContext(DrawerContext);
    const [, refetch] = useCarts();

    useEffect(() => {
        const fetchItems = async () => {
            const response = await axiosPublic.get(`/products/${id}`);
            setProduct(response.data);
        };
        fetchItems();
    }, [axiosPublic, id]);

    const { name, picture, price, stock_status, _id, category, description } = product;

    const handleAddToCart = async () => {
        if (!user) {
            setShowModal(true);
        } else {
            const cartInfo = {
                userEmail: user.email,
                name,
                picture,
                price,
                id: _id,
            };
    
            try {
                const res = await axiosSecure.post("/carts", cartInfo);
                if (res.data.insertedId) {
                    toast.success("Item added to cart!", {
                        position: "top-center",
                        autoClose: 1500, // ✅ ১.৫ সেকেন্ড পর টোষ্ট অটো বন্ধ হবে
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                    });
                }
                refetch();
            } catch (error) {
                console.error("Error adding to cart:", error);
            }
        }
    };
    

    const handleBuy = () => {
        if (!user) {
            setShowModal(true);
        } else {
            const cartInfo = {
                userEmail: user.email,
                name,
                picture,
                price,
                id,
            };
            axiosSecure.post("/carts", cartInfo);
            refetch();
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-14 flex-col md:flex-row flex justify-center items-center gap-10 bg-white p-5">
            <ToastContainer />
            <div className="">
                <img className="max-h-[400px]" src={picture} alt="" />
            </div>
            <div className="space-y-3">
                <h1 className="text-2xl font-semibold">{name}</h1>
                <h1 className="text-2xl font-semibold text-[#EF4444]">দামঃ {price} ৳</h1>
                <p className="text-xs font-semibold md:text-sm">
                    স্ট্যাটাস: {stock_status === "in_stock" ? "স্টকে আছে" : "স্টকে নাই"}
                </p>
                <h1>{description}</h1>
                <div className="flex items-center gap-3 flex-wrap">
                    <Link to={`/product/${_id}`}>
                        <button
                            onClick={() => {
                                openDrawer();
                                handleBuy();
                            }}
                            className="rounded-lg bg-[#233A95] px-14 py-2 text-white duration-300 hover:scale-105 "
                        >
                            কিনুন
                        </button>
                    </Link>
                    <button
                        onClick={handleAddToCart}
                        className="rounded-lg bg-[#EF4444] px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:"
                    >
                        + ব্যাগে যোগ করুন
                    </button>
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
                        <p className="text-gray-700 text-xs">১০০০ টাকার বেশি অর্ডারে ফ্রি শিপিং</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaLeaf className="text-green-500 text-xl" />
                        <p className="text-gray-700 text-xs">১০০% জৈবিক, প্রাকৃতিক ও গ্যারান্টিযুক্ত</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FaUndo className="text-red-500 text-xl" />
                        <p className="text-gray-700 text-xs">পরিবর্তন করতে চাইলে ১ দিনের মধ্যে ফেরত দিন</p>
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
            {/* Modal showing */}
            <div>
                {showModal && <LoginModal onClose={() => setShowModal(false)}></LoginModal>}
            </div>
        </div>
    );
};

export default ShowProductDetails;
