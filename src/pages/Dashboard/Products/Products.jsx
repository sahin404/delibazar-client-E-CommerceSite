import useAxiosSecure from "../../../hooks/useAxiosPublic/useAxiosSecure"
import {useQuery} from '@tanstack/react-query';
import Spinner from "../../../components/shared/Spinner";

const Products = () => {
  const axiosSecure = useAxiosSecure();

  const fetchProducts = async() =>{
    const res = await axiosSecure.get('/products');
    return res.data;
  }

  const {data: products=[], isLoading} = useQuery({
    queryKey:['products'],
    queryFn: fetchProducts,
  })

  if(isLoading){
    return <Spinner></Spinner>
  }

  return (
    <div>
      <h1 className="text-red-500 font-semibold text-3xl text-center">All Products List</h1>
      <div className="divider"></div>
      <div>
        <label className="" htmlFor="">Filtered By:</label>
        <select className="ml-2 w-52 p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-[#D1A054]">
          <option value="all">All Products</option>
          <option value="popular">🎩 Popular</option>
          <option value="grocery">🛒 Grocery</option>
          <option value="snacks">🍪 Snacks</option>
          <option value="cosmetics">💄 Cosmetics</option>
          <option value="beverages">🍷 Beverages</option>
          <option value="dairy_products">🐄 Dairy Products</option>
          <option value="bakery_items">🎂 Bakery Items</option>
          <option value="health_safety">👶 Health & Safety</option>
          <option value="baby_care">🚼 Baby Care</option>
          <option value="cooking_ingredients">👩‍🍳 Cooking Ingredients</option>
          <option value="cleaning_hygiene">🧹 Cleaning & Hygiene</option>
        </select>
      </div>
      {products.length}
    </div>
  )
}

export default Products