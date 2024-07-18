import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const {user,login} = useAuth()
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.user.value;
    const pin = form.pin.value;

    const userData = {
      user,
      pin,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, userData, { withCredentials: true });
      console.log("Login successful", response.data);
      if(response.data){
        const currentUser = response.data.foundUser;
        // console.log(currentUser);
        toast.success("Login successful")
        window.localStorage.setItem("token",response.data.token)
        login(currentUser)
        navigate('/dashboard')
      }
      
     

    } catch (error) {
      console.error("Login failed", error);
      setErrorMessage('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-1/2 mx-auto p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        <form noValidate="" action="" className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1 text-sm">
            <label htmlFor="user" className="block text-lg text-gray-600">
              Email / Mobile Number
            </label>
            <input
              type="text"
              name="user"
              id="user"
              placeholder="Your Email / Mobile Number"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="pin" className="block text-lg text-gray-600">
              PIN
            </label>
            <input
              type="password"
              name="pin"
              id="pin"
              placeholder="Enter the pin"
              className="w-full px-4 py-3 rounded-md border border-gray-200 focus:border-blue-600"
            />
          </div>
          <div className="w-full flex justify-center">
            <button className="text-center p-3 w-[40%] dark:text-gray-50 rounded-md bg-blue-600 flex justify-center">
              Log in
            </button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center pt-4 space-x-1">
          <Link className="w-[40%] ">
            <button className="btn w-full text-sky-500 btn-outline">Login With Mobile</button>
          </Link>
          <p className="px-6 text-sm text-center text-gray-600 my-3">
            Don&apos;t have an account yet?{" "}
            <Link to="/Register" className="hover:underline hover:text-blue-500 text-gray-600">
              Register
            </Link>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
