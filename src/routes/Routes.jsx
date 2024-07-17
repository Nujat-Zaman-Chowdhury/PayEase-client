import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Welcome from "../pages/Home/Welcome";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome/>,

    },
    {
      path: "/dashboard",
      element: <Dashboard/>,

    },
    {
      path: "/login",
      element: <Login/>,

    },
    {
      path: "/register",
      element: <Register/>,

    },
  ]);