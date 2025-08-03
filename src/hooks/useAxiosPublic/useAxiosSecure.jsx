import axios from "axios"

const axiosSecure = axios.create({
  baseURL: 'https://delibazar-server-e-commerce-site.vercel.app/'
})

const useAxiosSecure = () => {
  

  // request
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem('access-token');
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  )

  // response



  return axiosSecure;

}

export default useAxiosSecure
