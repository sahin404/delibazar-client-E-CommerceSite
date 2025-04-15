import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosPublic/useAxiosSecure"
import Spinner from "../../../components/shared/Spinner";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const fetchingData = async () => {
    const res = await axiosSecure.get('/users')
    return res.data;
  }

  const { data: users = [], isLoading } = useQuery({
    queryKey: ['users'],
    queryFn: fetchingData
  })

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
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email} BDT</td>
                <td className="px-4 py-2">{user.date}</td>
                <td className="px-4 py-2 flex gap-2">
                  <button className="bg-blue-500 text-white px-4 py-1 rounded">
                    Make Admin
                  </button>
                  <button className="bg-red-500 text-white px-4 py-1 rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>


      </div>
    </div>
  )
}

export default Users