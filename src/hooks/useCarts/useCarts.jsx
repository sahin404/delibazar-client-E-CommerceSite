import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosPublic/useAxiosSecure";

const useCarts = () => {
    const {user}  = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data:carts=[], refetch } = useQuery({
        queryKey: ['carts', user?.email], // Include user.email in the query key
        queryFn: async () => {
          const response = await axiosSecure.get(`/carts?email=${user.email}`);
          return response.data; // Return the data instead of setting state
        }
      });
  return [carts, refetch]
  
}

export default useCarts