import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Root from "../layout/Root";
import Login from './../pages/Login/Login';
import Register from "../pages/Register/Register";
import Products from './../components/Products/Products';
import PrivateRoute from "./PrivateRoute";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        }, 
        {
          path: "/products",
          element: <PrivateRoute><Products></Products></PrivateRoute>,
        }, 
        {
          path: "/login",
          element: <Login></Login>,
        }, 
        {
          path: "/register",
          element: <Register></Register>,
        }, 
    ],
}])
