import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import Home from "../Home/Home/Home";
import Shop from "../Layout/Shop";
import Man from "../page/Shop/Men/man";
import Details from "../page/Details/Details";
import Profile from "../Layout/Profile";
import Cart from "../page/Shop/Cart/Cart";
import ProfileInfo from "../page/profile/profileInfo";
import Order from "../page/Profile/Order";
import PrivetRoute from "./PrivetRoute";
import Contact from "../page/Contact/Contact";
import Dokan from "../page/Dokan/Dokan";
import Woman from "../page/Shop/Woman/Woman";
import Footwear from "../page/Shop/Footwear/Footwear";
import Kids from "../page/Shop/Kids/Kids";
import AddressBook from "../page/profile/AddressBook";

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
          path:'/detail/:id',
          element:<PrivetRoute><Details/></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5000/men/${params.id}`)
        },
        {
          path:"/contact",
          element:<Contact/>
        },
        {
          path:'/dokan',
          element:<Dokan/>
        },
        {
          path:'/profile',
          element:<PrivetRoute><Profile/></PrivetRoute>,
          children:[
            {
              path:':displayName',
              element:<ProfileInfo/>,
              loader:({params})=>fetch(`http://localhost:5000/user/${params.displayName}`)
            },
            {
              path:'address',
              element:<AddressBook/>
            },
            {
              path:'order',
              element:<Order/>
            }
          ]
        },
        {
          path:'/shop',
          element:<PrivetRoute><Shop/></PrivetRoute>,
          children:[
            {
              path:'/shop',
              element:<Cart/>
            },
            {
              path:'man',
              element:<Man/>
            },
            {
              path:'women',
              element:<Woman/>
            },
            {
              path:'footwear',
              element:<Footwear></Footwear>
            },
            {
              path:'kids',
              element:<Kids/>
            },
            {
              path:'bangla',
              element:''
            },
            {
              path:'western',
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