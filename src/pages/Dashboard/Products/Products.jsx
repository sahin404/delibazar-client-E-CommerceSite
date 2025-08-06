import useAxiosSecure from "../../../hooks/useAxiosPublic/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import AddProductModal from "../DashboardComponents/AddProductsModal/AddProductModal";
import Swal from "sweetalert2";
import UpdateProductModal from "../DashboardComponents/UpdateProductModal/UpdateProductModal";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Products = () => {
  const axiosSecure = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [productToUpdate, setProductToUpdate] = useState([]);
  const { loading } = useContext(AuthContext);

  const fetchProducts = async () => {
    const res = await axiosSecure.get("/products");
    return res.data;
  };

  const {
    data: products = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/products/${id}`).then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  const handleUpdate = async (id) => {
    await axiosSecure.get(`/products/${id}`).then((res) => {
      if (res.status === 200) {
        setProductToUpdate(res.data);
        setIsUpdateModalOpen(true);
      }
    });
  };

  if (isLoading || loading) {
    return null;
  }

  return (
    <div>
      <h1 className="text-red-500 font-semibold text-3xl text-center">
        All Products List
      </h1>
      <div className="divider"></div>
      <div className="flex justify-between items-center">
        <div></div>
        <div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-3 rounded"
          >
            + Add Product
          </button>
        </div>
      </div>
      <div className="mt-3 text-[#D1A054]">
        Number of Products: {products.length}
      </div>

      <div className="mt-5">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th className="px-4 py-2">Serial No</th>
              <th className="px-4 py-2">Image</th>
              <th className="px-4 py-2">Product Name</th>
              <th className="px-4 py-2">Product Price</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product._id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">
                  <img
                    src={
                      product.picture ||
                      "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=360"
                    }
                    alt={product.picture}
                    className="w-16 h-16 object-cover"
                  />
                </td>
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.price} BDT</td>
                <td className="px-4 py-2 flex gap-2">
                  <button
                    onClick={() => handleUpdate(product._id)}
                    className="bg-blue-500 text-white px-4 py-1 rounded"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-500 text-white px-4 py-1 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Add Product Modal */}
        <AddProductModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />

        {/* Update Product Modal */}
        <UpdateProductModal
          isUpdateModalOpen={isUpdateModalOpen}
          setIsUpdateModalOpen={setIsUpdateModalOpen}
          productToUpdate={productToUpdate}
          refetch={refetch}
        />
      </div>
    </div>
  );
};

export default Products;
