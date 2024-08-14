import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Errorpage/ErrorPage";
import Root from "../layout/Root";


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
    ],
}])
