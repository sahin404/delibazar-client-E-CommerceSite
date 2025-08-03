import axios from 'axios'

const axiosPublic = axios.create({
  baseURL:'https://delibazar-server-e-commerce-site.vercel.app/'
})

const useAxiosPublic = () => {
  return axiosPublic;
}

export default useAxiosPublic
