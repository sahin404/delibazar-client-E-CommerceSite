import { useEffect, useState } from "react"
import Banner from "../Banner/Banner"
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic"
import ShowProductCard from "./ShowProductCard/ShowProductCard";

const RightHomeBody = ({ category }) => {
  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();
  if(category===""){
    category='popular';
  }
  useEffect(()=>{
    const fetchData = async()=>{
      const response = await axiosPublic.get(`/products/${category}`)
      setProducts(response.data);
    }
    fetchData();
  },[axiosPublic,category])
  return (
    <div>
      {category==='popular' && <Banner></Banner>}
      
      <div className="grid grid-cols-3 gap-5 px-5 py-3">
        {
          products.map((product)=><ShowProductCard
          key={product._id}
          product={product}
          ></ShowProductCard>)
        }
      </div>

    </div>
  )
}

export default RightHomeBody