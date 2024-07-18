import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

export const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_API_URL,
    
    
})
    const useAxiosSecure = () => {
    const {logout} = useAuth();
    const navigate = useNavigate();
    //request interceptor
      axiosSecure.interceptors.request.use(function(config){
      const token = localStorage.getItem('token')
      console.log(token);

      config.headers.authorization =`Bearer ${token}`
      // console.log(config.headers.authorization);
      return config;
    }, function(error) {
      return Promise.reject(error);
    })


  axiosSecure.interceptors.response.use(function(response){
    return response
},async(error)=>{
    const status = error.response.status
    // console.log('status error',status);
    //for 401 or 403 logout user and move user to login page
    if(status === 401 || status === 403){
        await logout();
        navigate('/login')
    }
    return Promise.reject(error)
})


    return axiosSecure;
};

export default useAxiosSecure;