import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import ShowProductCard from "./ShowProductCard/ShowProductCard";

const RightHomeBody = ({ category, filter }) => {
  const [products, setProducts] = useState([]);
  const axiosPublic = useAxiosPublic();

  if (category === "") {
    category = "popular";
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await axiosPublic.get(`/products/${category}`);
      let sortedProducts = response.data;

      // Sorting logic based on filter
      if (filter === "মূল্য উচ্চমুখী") {
        sortedProducts = [...sortedProducts].sort((a, b) => b.price - a.price);
      } else if (filter === "মূল্য নিম্নমুখী") {
        sortedProducts = [...sortedProducts].sort((a, b) => a.price - b.price);
      }

      setProducts(sortedProducts);
    };

    fetchData();
  }, [axiosPublic, category, filter]); // filter dependency added

  return (
    <div>
      <div className="hidden sm:block">
        {category === "popular" && <Banner />}
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-3">
        {products.map((product) => (
          <ShowProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RightHomeBody;
