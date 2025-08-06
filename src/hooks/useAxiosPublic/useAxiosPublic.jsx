import axios from 'axios'

const axiosPublic = axios.create({
  //https://delibazar-server.onrender.com
  baseURL:'https://delibazar-server.onrender.com'
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic
