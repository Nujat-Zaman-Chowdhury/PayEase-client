import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import Welcome from "../pages/Home/Welcome";
import Register from "../pages/register/Register";
import Dashboard from "../pages/dashboard/Dashboard";
import Layout from "../components/Shared/Layout";
import UserManagement from "../pages/Admin/UserManagement/UserManagement";
import SystemMonitoring from "../pages/Admin/SystemMonitoring/SystemMonitoring";
import SendMoney from "../pages/User/SendMoney/SendMoney";
import CashOut from "../pages/User/CashOut/CashOut";
import CashIn from "../pages/User/CashIn/CashIn";
import BalanceInquiryUser from "../pages/User/BalanceInquiryUser/BalanceInquiryUser";
import TransactionHistoryUser from "../pages/User/TransactionHistory/TransactionHistoryUser";
import TransactionManagement from "../pages/Agent/TransactionManagement/TransactionManagement";
import BalanceInquiry from "../pages/Agent/BalanceInquiry/BalanceInquiry";
import TransactionHistory from "../pages/Agent/TransactionHistory/TransactionHistory";
import Overview from "../pages/User/Overview/Overview";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome/>,

    },

    //login and register
    {
      path: "/login",
      element: <Login/>,

    },
    {
      path: "/register",
      element: <Register/>,

    },

    //dashboard
    {
      path: "/dashboard",
      element: <Layout/>,
      children:[
        {
          index:true,
          element:<Dashboard/>
        },
        //admin routes
        {
          path:'admin/user-management',
          element:<UserManagement/>
        },
        {
          path:"admin/system-monitoring",
          element:<SystemMonitoring/>
        },

        //User routes
        {
          path:"user/send-money",
          element:<SendMoney/>
        },
        {
          path:"user/cash-out",
          element:<CashOut/>
        },
        {
          path:'user/cash-in',
          element:<CashIn/>
        },
        {
          path:'user/balance-inquiry',
          element:<BalanceInquiryUser/>

        },
        {
          path:'user/transaction-history',
          element:<TransactionHistoryUser/>

        },


        //agent routes
        {
          path:"agent/transaction-management",
          element:<TransactionManagement/>,
        },
        {
          path:"agent/balance-inquiry",
          element:<BalanceInquiry/>
        },
        {
          path:'agent/transaction-history',
          element:<TransactionHistory/>
        }
      ]
    },
  ]);