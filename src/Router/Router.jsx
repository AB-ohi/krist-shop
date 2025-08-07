import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/main";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import Home from "../Home/Home/Home";
import Shop from "../Layout/Shop";
import Details from "../page/Details/Details";
import Profile from "../Layout/Profile";
import ProfileInfo from "../page/profile/profileInfo";
import Order from "../page/Profile/Order";
import PrivetRoute from "./PrivetRoute";
import Contact from "../page/Contact/Contact";
import Dokan from "../page/Dokan/Dokan";
import Woman from "../page/Shop/Woman/Woman";
import Footwear from "../page/Shop/Footwear/Footwear";
import Kids from "../page/Shop/Kids/Kids";
import AddressBook from "../page/profile/AddressBook";
import AdminRoute from "./AdminRoute";
import ManageUser from "../page/Admin/ManageUser";
import AdminDashboard from "../page/Admin/AdminDashboard";
import ManageProduct from "../page/Admin/manageProduct";
import Man from "../page/Shop/Men/Man";
import CategoryProduct from "../page/Shop/CategoryProduct/CategoryProduct";
import NotFound from "../page/404/NotFound";
import SelectItem from "../page/SelectItem/SelectItem";

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
          loader:({params})=>fetch(`http://localhost:5000/AllProduct/detail/${params.id}`)
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
            },
            {
              path:'manageUser',
              element:<AdminRoute><ManageUser/></AdminRoute>
            },
            {
              path:'dashboard/:displayName',
              element:<AdminRoute><AdminDashboard/></AdminRoute>,
              loader:({params})=>fetch(`http://localhost:5000/user/${params.displayName}`)
            },
            {
              path:'manage_Product',
              element:<AdminRoute><ManageProduct/></AdminRoute>
            }
          ]
        },

        // shop rout head
        {
  path: '/shop',
 element: <PrivetRoute><Shop /></PrivetRoute>,
  children: [
    
        {
          path: ':category', 
          element: <CategoryProduct />,
          loader: ({ params }) =>
            fetch(`http://localhost:5000/AllProduct/category/${params.category}`)
        }
      
  ]
},
// shop rout end
        
    {
      path:'*',
      element:<NotFound/>
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