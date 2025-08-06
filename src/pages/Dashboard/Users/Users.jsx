import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosPublic/useAxiosSecure";
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { loading } = useContext(AuthContext);

  // Fetch all users
  const fetchUsers = async () => {
    const res = await axiosSecure.get('/auth/users');
    return res.data;
  }

  const { data: users = [], isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  // Delete user handler
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
        axiosSecure.delete(`/auth/users/delete/${id}`)
          .then(res => {
            if (res.status === 200) {
              Swal.fire("Deleted!", "User has been deleted.", "success");
              refetch();
            }
          })
          .catch(() => Swal.fire("Error!", "Failed to delete user.", "error"));
      }
    });
  };

  // Make admin handler
  const handleMakeAdmin = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to promote this user to an admin.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/auth/users/add-admin/${id}`)
          .then(res => {
            if (res.status === 200) {
              Swal.fire("Updated!", "User is now an admin.", "success");
              refetch();
            }
          })
          .catch(() => Swal.fire("Error!", "Failed to update user role.", "error"));
      }
    });
  };

  // Remove admin handler
  const handleRemoveAdmin = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You are about to remove admin access.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove admin!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/auth/users/remove-admin/${id}`)
          .then(res => {
            if (res.status === 200) {
              Swal.fire("Updated!", "Admin access removed.", "success");
              refetch();
            }
          })
          .catch(() => Swal.fire("Error!", "Failed to update user role.", "error"));
      }
    });
  };

  if (isLoading || loading) {
    return <p>Loading...</p>;
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
              <th className="px-4 py-2">Created At</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">No users found.</td>
              </tr>
            )}
            {users.map((user, index) => (
              <tr key={user._id} className="border-b">
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{new Date(user.createdAt).toLocaleString()}</td>
                <td className="px-4 py-2 flex gap-2">
                  {user.role === 'admin' ? (
                    <button
                      onClick={() => handleRemoveAdmin(user._id)}
                      className="w-32 h-10 bg-orange-500 text-white rounded"
                    >
                      Remove Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="w-32 h-10 bg-blue-500 text-white rounded"
                    >
                      Make Admin
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(user._id)}
                    className="w-32 h-10 bg-red-500 text-white rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
