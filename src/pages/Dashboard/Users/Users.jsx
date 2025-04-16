import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosPublic/useAxiosSecure"
import Spinner from "../../../components/shared/Spinner";
import { useState } from "react";
import ProductPaginationControl from "../Products/ProductPaginationControl";
import Swal from "sweetalert2";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const [page, setPage] = useState(1);

  const fetchingData = async ({ queryKey }) => {
    const page = queryKey;
    const limit = 10;
    const res = await axiosSecure.get('/dbusers', {
      params: { page, limit }
    });
    return res.data;
  }

  const { data: { result: users = [], total = 0 } = {}, isLoading, refetch } = useQuery({
    queryKey: ['users', page],
    queryFn: fetchingData,
    keepPreviousData: true
  })

  const totalPage = Math.ceil(total / 10);

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/user/${id}`)
          .then(res => {
            if (res.status === 200) {
              Swal.fire({
                title: "Deleted!",
                text: "This Account has been deleted.",
                icon: "success"
              });
              refetch();
            }
          })
      }
    });
  }

  const handleMakeAdmin = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to promote this user to an admin. Do you want to continue?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.patch(`/userMakeAdmin/${id}`)
          .then(res => {
            if (res.status === 200) {
              Swal.fire({
                title: "Updated!",
                text: "This user has been granted admin privileges.",
                icon: "success"
              });
              refetch();
            }
          })
      }
    });
  }

  const handleDeleteMakeAdmin = id => {

  }

  if (isLoading) {
    return <Spinner></Spinner>
  }
  return (
    <div>
      <h1 className="text-red-500 font-semibold text-3xl text-center">All Users List</h1>
      <div className="mt-5">

        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th className="px-4 py-2">Serial No</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Creation Time</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id} className="border-b">
                <td className="px-4 py-2">{(page - 1) * 10 + index + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.date}</td>
                <td className="px-4 py-2 flex gap-2">
                  {
                    user?.role === 'admin' ? <button onClick={() => handleDeleteMakeAdmin(user._id)} className="w-32 h-16 bg-orange-500 text-white px-4 py-1 rounded">
                      Remove Admin
                    </button> : <button onClick={() => handleMakeAdmin(user._id)} className="h-16 w-32 bg-blue-500 text-white px-4 py-1 rounded">
                      Make Admin
                    </button>
                  }

                  <button onClick={() => handleDelete(user._id)} className="w-32 h-16 bg-red-500 text-white px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <ProductPaginationControl
          page={page}
          setPage={setPage}
          totalPage={totalPage}
        ></ProductPaginationControl>

      </div>
    </div>
  )
}

export default Users