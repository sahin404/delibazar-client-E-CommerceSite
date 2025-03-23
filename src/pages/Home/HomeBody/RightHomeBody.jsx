import Banner from "../Banner/Banner";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import ShowProductCard from "./ShowProductCard/ShowProductCard";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "./Skeleton/Skeleton";

const RightHomeBody = ({ category, filter }) => {
  const axiosPublic = useAxiosPublic();

  if (category === "") {
    category = "popular";
  }

  const { data: products = [], isLoading } = useQuery({
    queryKey: ["products", category, filter],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${category}`);
      let sortedProducts = res.data;

      // Sorting logic based on filter
      if (filter === "মূল্য উচ্চমুখী") {
        sortedProducts = [...sortedProducts].sort((a, b) => b.price - a.price);
      } else if (filter === "মূল্য নিম্নমুখী") {
        sortedProducts = [...sortedProducts].sort((a, b) => a.price - b.price);
      }
      return sortedProducts;
    }
  })

  return (
    <div>
      <div className="hidden sm:block">
        {category === "popular" && <Banner />}
      </div>

      {
        isLoading ? <div className="gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
          <Skeleton></Skeleton>
        </div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-3">
          {products.map((product) => (
            <ShowProductCard key={product._id} product={product} />
          ))}
        </div>
      }


    </div>
  );
};

export default RightHomeBody;
