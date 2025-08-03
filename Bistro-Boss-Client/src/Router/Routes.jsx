import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Components/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Users/Login/Login";
import SignUp from "../Pages/Users/SignUp/SignUp";
import PrivateRoutes from "./PrivateRoutes";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Dashboard from "../Layouts/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoute from "./adminRoute";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItems from "../Pages/Dashboard/UpdateItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts></Layouts>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // only users
      {
        path: "/dashboard/home",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },

      // admin user
      {
        path: "/dashboard/admin-home",
        element: (
          <AdminRoute>
            <AdminHome></AdminHome>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "/dashboard/add-items",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/items",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItems></UpdateItems>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bistro-boss-server-three-sandy.vercel.app/menu/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
