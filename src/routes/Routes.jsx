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
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Welcome/>,

    },
    {
      path: "/login",
      element: <Login/>,

    },
    {
      path: "/register",
      element: <Register/>,

    },
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
          path:'/user-management',
          element:<UserManagement/>
        },
        {
          path:"/system-monitoring",
          element:<SystemMonitoring/>
        },

        //User routes
        {
          path:"/send-money",
          element:<SendMoney/>
        },
        {
          path:"/cash-out",
          element:<CashOut/>
        },
        {
          path:'/cash-in',
          element:<CashIn/>
        },
        {
          path:'/balance-inquiry',
          element:<BalanceInquiryUser/>

        },
        {
          path:'/transaction-history',
          element:<TransactionHistoryUser/>

        },


        //agent routes
        {
          path:"/transaction-management",
          element:<TransactionManagement/>,
        },
        {
          path:"/balance-inquiry",
          element:<BalanceInquiry/>
        },
        {
          path:'/transaction-history',
          element:<TransactionHistory/>
        }
      ]
    },
  ]);