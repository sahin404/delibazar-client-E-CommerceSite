import Banner from "../Banner/Banner";
import useAxiosPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import ShowProductCard from "./ShowProductCard/ShowProductCard";
import { useQuery } from "@tanstack/react-query";
import Skeleton from "./Skeleton/Skeleton";
import { useState } from "react";

const RightHomeBody = ({ category, filter }) => {
  const axiosPublic = useAxiosPublic();
  const [page, setPage] = useState(1);
  const limit = 9; // Number of products per page

  if (category === "") {
    category = "popular";
  }

  const { data: productsData = { products: [], total: 0 }, isLoading } = useQuery({
    queryKey: ["products", category, filter, page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/products/${category}?page=${page}&limit=${limit}`);
      let sortedProducts = res.data.products;

      // Sorting logic based on filter
      if (filter === "মূল্য উচ্চমুখী") {
        sortedProducts = [...sortedProducts].sort((a, b) => b.price - a.price);
      } else if (filter === "মূল্য নিম্নমুখী") {
        sortedProducts = [...sortedProducts].sort((a, b) => a.price - b.price);
      }
      return { products: sortedProducts, total: res.data.total };
    },
    staleTime: 0, // Always fetch fresh data
    cacheTime: 5 * 60 * 1000, // Cache for 5 minutes
    refetchOnWindowFocus: false,
    keepPreviousData: true, // Keep previous data while loading new data
  });

  const totalPages = Math.ceil(productsData.total / limit);

  return (
    <div>
      <div className="hidden sm:block">
        {category === "popular" && <Banner />}
      </div>

      {isLoading ? (
        <div className="gap-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} />
          ))}
        </div>
      ) : (
        <div>
          {productsData.products.length === 0 ? (
            <div className="col-span-full w-2/3 mx-auto mt-5 text-center text-lg text-black">
              এই ক্যাটেগরির জন্য কোনো পণ্য পাওয়া যাচ্ছে না। দয়া করে পরে আবার চেষ্টা করুন অথবা অন্য কোনো ফিল্টার নির্বাচন করুন।
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5 py-3">
                {productsData.products.map((product) => (
                  <ShowProductCard key={product._id} product={product} />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center gap-2 mt-6 mb-4">
                  <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                    disabled={page === 1}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2">
                    Page {page} of {totalPages}
                  </span>
                  <button
                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={page === totalPages}
                    className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default RightHomeBody;
