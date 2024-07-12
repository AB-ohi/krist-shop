import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import PrivetRoute from "./privetRoute";
import Home from "../Home/Home/Home";
import Shop from "../page/Shop/Shop";
import Man from "../page/Shop/Men/man";
import Details from "../page/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:'/detail/:detailsId',
          element:<PrivetRoute><Details/></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5173/shop/detail/${params.detailsId}.json`)
        },
        {
          path:'/shop',
          element:<PrivetRoute><Shop/></PrivetRoute>,
          children:[
            {
              path:'man',
              element:<Man/>
            }
          ]
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