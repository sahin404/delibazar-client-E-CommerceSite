import axios from "axios"

const axiosSecure = axios.create({
    baseURL:'https://delibazar-server.onrender.com/'
})

const useAxiosSecure = () => {
  return axiosSecure;
  
}

export default useAxiosSecure
