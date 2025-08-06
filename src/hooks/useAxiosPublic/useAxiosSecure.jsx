import axios from "axios"

const axiosSecure = axios.create({
  baseURL: 'https://delibazar-server.onrender.com'
})

axiosSecure.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem('access-token');
    if(token){
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const useAxiosSecure = () => {
  return axiosSecure;
}

export default useAxiosSecure;
