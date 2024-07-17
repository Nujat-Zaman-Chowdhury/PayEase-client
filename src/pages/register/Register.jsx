import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate()
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.username.value;
        const pin = form.pin.value;
        const mobile = form.mobile.value;
        const email = form.email.value;
        const role = form.role.value;
        
        const userData = {
          name,
          pin,
          mobileNumber: mobile,
          email,
          role,
        };
    
        try {
          const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, userData);
          console.log("Registration successful", response.data);
          toast.success("Login successful");
          navigate("/dashboard")
        } catch (error) {
          console.error("Registration failed", error);
          toast.error("Registration failed", error);
        }
      };
    return (
        <div className="flex justify-center items-center w-full h-full">
      <div className="w-1/2 mx-auto p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <form noValidate="" action="" className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-lg text-gray-600">
              User Name
            </label>
            <input
              type="name"
              name="username"
              id="username"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-md border border-gray-200  focus:border-blue-600"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-lg text-gray-600">
              PIN
            </label>
            <input
              type="password"
              name="pin"
              id="pin"
              maxLength="5"
              required
              placeholder="Enter the pin (5 digit)"
              className="w-full px-4 py-3 rounded-md border border-gray-200  focus:border-blue-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-lg text-gray-600">
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              placeholder="Enter the pin"
             maxLength="11"
              className="w-full px-4 py-3 rounded-md border border-gray-200  focus:border-blue-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-lg text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-md border border-gray-200  focus:border-blue-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label
              htmlFor="password"
              className="block mb-2 text-md font-poppins"
            >
              Select role
            </label>
            <select
            defaultValue="default"
              name="role"
              className="w-full px-3 py-3 border rounded-md border-gray-200 focus:border-blue-600"
            >
              <option disabled value="default">
                Select Your Role
              </option>
              <option value="User">User</option>
              <option value="Agent">Agent</option>
            </select>
          </div>
          <div className="w-full flex justify-center">
          <button className="text-center p-3 w-[40%] dark:text-gray-50 rounded-md bg-blue-600 flex justify-center">
            Register
          </button>
          </div>
        </form>
        <div className="flex flex-col justify-center items-center pt-4 space-x-1">
          <p className="px-6 text-sm text-center text-gray-600 my-2">
          Already a member?{" "}
          <Link
            to="/login"
            className="hover:underline hover:text-blue-500 text-gray-600"
          >
            Login
          </Link>
        </p>
        </div>
      </div>
    </div>
    );
};

export default Register;