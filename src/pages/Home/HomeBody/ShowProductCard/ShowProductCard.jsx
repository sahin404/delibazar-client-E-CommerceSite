import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import LoginModal from "../../../../components/nonShared/loginModal";
import { toast, ToastContainer } from "react-toastify";
import useAxiosSecure from "../../../../hooks/useAxiosPublic/useAxiosSecure";
import useCarts from "../../../../hooks/useCarts/useCarts";

const ShowProductCard = ({ product }) => {
    const { name, picture, price, stock_status, _id } = product;
    const { user } = useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const axiosSecure = useAxiosSecure();
    const [,refetch] = useCarts();
    const handleAddToCard = () => {
        if (!user) {
            // if(loading){
            //     return <progress className="progress w-56"></progress>
            // }
            setShowModal(true);
        }
        else {
            const cartInfo = {
                userEmail: user.email,
                name,
                picture,
                price,
                id: _id
            }
            // console.log(cartInfo);
            axiosSecure.post('/carts', cartInfo)
                .then(res => {
                    // console.log(res);
                    if (res.data.insertedId) {
                        // console.log('done');
                        toast.success('Item added to cart Successfully!', {
                            position: "top-center",  // Centered at the top of the page
                            autoClose: 1500,         // Auto close after 3 seconds
                            hideProgressBar: true,   // Optionally hide progress bar
                            closeOnClick: true,      // Close the toast on click
                            draggable: true,         // Enable dragging of toast
                        });
                        refetch();
                    }
                })
        }
    }

    return (
        <div className="space-y-2 rounded-xl bg-white p-3 shadow-lg border-2">
            <ToastContainer />
            <div className="relative flex h-48 w-full justify-center lg:h-[260px]">
                <img className="rounded-lg bg-black/40 object-cover" src={picture} alt="" />
            </div>
            <div className="space-y-2 font-semibold">
                <h6 className="text-sm md:text-base lg:text-lg">{name}</h6>
                <p className="text-xs font-semibold text-[#EF4444] md:text-sm">{stock_status === 'in_stock' ? "স্টকে আছে" : "স্টকে নাই"}</p>
                <p>দাম: {price}৳</p>
            </div>
            <div className="flex items-center justify-center gap-3 flex-wrap">
                <Link to={`/product/${_id}`}><button className="rounded-lg bg-[#233A95] px-4 py-2 text-white duration-300 hover:scale-105 ">বিস্তারিত</button></Link>
                <button onClick={handleAddToCard} className="rounded-lg bg-[#EF4444] px-4 py-2 font-semibold text-white duration-300 hover:scale-95 hover:">ব্যাগে যোগ করুন</button>
            </div>
            <div>
                {showModal && <LoginModal onClose={() => setShowModal(false)}></LoginModal>}
            </div>
        </div>
    )
}

export default ShowProductCard