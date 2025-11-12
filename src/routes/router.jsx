import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import AllProperties from "../pages/AllProperties";
import AddProperty from "../pages/AddProperty";
import MyProperties from "../pages/MyProperties";
import MyRatings from "../pages/MyRatings";

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
        Component: AddProperty,
      },
      {
        path: "/my-properties",
        Component: MyProperties,
      },
      {
        path: "/my-ratings",
        Component: MyRatings,
      },
    ],
  },
]);
