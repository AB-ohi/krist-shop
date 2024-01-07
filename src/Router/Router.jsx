import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import PrivetRoute from "./privetRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <PrivetRoute><Main/></PrivetRoute>,
      children:[
        {
          
        }
      ]
    },
    {
      path:"/login",
      element:<Login/>
    },
    {
      path:"registration",
      element:<SignUp/>
    }
  ]);

export default router