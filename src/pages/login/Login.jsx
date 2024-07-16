import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="w-1/2 mx-auto p-8 space-y-3 rounded-xl">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form noValidate="" action="" className="space-y-6">
          <div className="space-y-1 text-sm">
            <label htmlFor="username" className="block text-lg text-gray-600">
              Email
            </label>
            <input
              type="email"
              name="username"
              id="username"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-md border border-gray-200  focus:border-blue-600"
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="password" className="block text-lg text-gray-600">
              PIN
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter the pin"
              className="w-full px-4 py-3 rounded-md border border-gray-200  focus:border-blue-600"
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
          <Link
            to="/Register"
            className="hover:underline hover:text-blue-500 text-gray-600"
          >
            Register
          </Link>
          .
        </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
