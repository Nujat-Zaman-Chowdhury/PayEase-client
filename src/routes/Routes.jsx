import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Welcome from "../pages/Home/Welcome";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome/>,

    },
    {
      path: "/login",
      element: <Login/>,

    },
  ]);