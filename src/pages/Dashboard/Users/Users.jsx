import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosPublic/useAxiosSecure"
import Spinner from "../../../components/shared/Spinner";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const fetchingData = async ()=>{
    const res = await axiosSecure.get('/users')
    return res.data;
  }
 
  const {data:users=[], isLoading} = useQuery({
    queryKey:['users'],
    queryFn: fetchingData
  })

  if(isLoading){
    return <Spinner></Spinner>
  }
  return (
    <div>

    </div>
  )
}

export default Users