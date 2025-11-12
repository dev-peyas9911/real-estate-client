import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllProperties from "../pages/AllProperties";
import MyProperties from "../pages/MyProperties";
import MyRatings from "../pages/MyRatings";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import PrivateRoute from "../privateRoute/PrivateRoute";
import AddProperties from "../pages/AddProperties";
import LoadingSpinner from "../pages/LoadingSpinner";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <LoadingSpinner></LoadingSpinner>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-properties",
        element: <AllProperties></AllProperties>,
        loader: () => fetch("http://localhost:3000/models"),
      },
      {
        path: "/add-properties",
        element: (
          <PrivateRoute>
            <AddProperties></AddProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-properties",
        element: (
          <PrivateRoute>
            <MyProperties></MyProperties>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-ratings",
        element: (
          <PrivateRoute>
            <MyRatings></MyRatings>
          </PrivateRoute>
        ),
      },
      {
        path: "/signin",
        Component: Signin,
      },
      {
        path: "/signup",
        Component: Signup,
      },
    ],
  },
]);
