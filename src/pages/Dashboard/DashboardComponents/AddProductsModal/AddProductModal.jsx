import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hooks/useAxiosPublic/useAxiosSecure";

const AddProductModal = ({ isModalOpen, setIsModalOpen }) => {
    const axiosSecure = useAxiosSecure();
    if (!isModalOpen) {
        return null;
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const newProduct = {
            picture: form.image.value,
            name: form.name.value,
            category: form.category.value,
            price: parseFloat(form.price.value),
            stock_status: form.stockStatus.value,
            description: form.description.value,
           
        };
        
        axiosSecure.post('/addProduct',newProduct)
        .then(res=>{
            if(res.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'Product Added!',
                    text: 'Your product has been added successfully.',
                    showConfirmButton: false,
                    timer: 1500,
                    timerProgressBar: true,
                  })
                  .then(()=>{
                    form.reset();
                  })
                
            }
        })
        .catch(()=>{
            console.log('err occured in add product api');
        })
        

        
    }
    return (
        <div>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg p-6 w-80">
                    <button
                        className="text-gray-500 float-right text-xl font-bold"
                        onClick={() => setIsModalOpen(false)}
                    >
                        &times;
                    </button>
                    {/* Form Body */}
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-[#D1A054]">Add New Product</h2>
                                <button
                                    className="text-gray-500 text-2xl font-bold"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    &times;
                                </button>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" name="name" placeholder="Product Name" required className="w-full p-2 border rounded border-gray-300  shawow-sm focus:ring-2 focus:ring-[#D1A054] focus:border-[#D1A054] outline-none" />

                                <select name="category" required className="w-full p-2 border rounded border-gray-300  shawow-sm focus:ring-2 focus:ring-[#D1A054] focus:border-[#D1A054] outline-none">
                                    <option value="">Select Category</option>
                                    <option value="popular">Popular</option>
                                    <option value="grocery">Grocery</option>
                                    <option value="snacks">Snacks</option>
                                    <option value="cosmetics">Cosmetics</option>
                                    <option value="beverages">Beverages</option>
                                    <option value="dairy_products">Dairy Products</option>
                                    <option value="bakery_items">Bakery Items</option>
                                    <option value="health_safety">Health & Safety</option>
                                    <option value="baby_care">Baby Care</option>
                                    <option value="cooking_ingredients">Cooking Ingredients</option>
                                    <option value="cleaning_hygiene">Cleaning & Hygiene</option>
                                </select>

                                <select name="stockStatus" required className="w-full p-2 border rounded border-gray-300  shawow-sm focus:ring-2 focus:ring-[#D1A054] focus:border-[#D1A054] outline-none">
                                    <option value="">Stock Status</option>
                                    <option value="in_stock">In Stock</option>
                                    <option value="out_of_stock">Out of Stock</option>
                                </select>

                                <input autoComplete="off" type="number" name="price" placeholder="Price (BDT)" required className="w-full p-2 border rounded border-gray-300  shawow-sm focus:ring-2 focus:ring-[#D1A054] focus:border-[#D1A054] outline-none" />

                                <textarea name="description" placeholder="Description" rows="3" required className="w-full p-2 border rounded border-gray-300  shawow-sm focus:ring-2 focus:ring-[#D1A054] focus:border-[#D1A054] outline-none"></textarea>

                                <input type="text" name="image" placeholder="Image URL" required className="w-full p-2 border rounded border-gray-300  shawow-sm focus:ring-2 focus:ring-[#D1A054] focus:border-[#D1A054] outline-none" />

                                <button type="submit" className="w-full bg-[#D1A054] text-white font-semibold p-2 rounded">
                                    Submit Product
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddProductModal