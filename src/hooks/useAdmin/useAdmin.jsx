import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosSecure from "../useAxiosPublic/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useAdmin = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        enabled: !!user?.email, // Prevents the query from executing if user.email is undefined
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/auth/admin/${user?.email}`);
            return res.data.admin;
        }
    })

    return [isAdmin, isAdminLoading];
}

export default useAdmin