import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllProperties from "../pages/AllProperties";
import AddProperty from "../pages/AddProperty";
import MyProperties from "../pages/MyProperties";
import MyRatings from "../pages/MyRatings";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-properties",
        Component: AllProperties,
      },
      {
        path: "/add-property",
        element: <PrivateRoute><AddProperty></AddProperty></PrivateRoute>,
      },
      {
        path: "/my-properties",
        element: <PrivateRoute><MyProperties></MyProperties></PrivateRoute>,
      },
      {
        path: "/my-ratings",
        element: <PrivateRoute><MyRatings></MyRatings></PrivateRoute>,
      },
      {
        path: "/signin",
        Component: Signin
      },
      {
        path: "/signup",
        Component: Signup
      }
    ],
  },
]);
