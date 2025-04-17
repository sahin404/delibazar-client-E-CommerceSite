import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ShowProductDetails from "../pages/ShowProductDetails/ShowProductDetails";
import Login from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../layout/Dashboard";
import Users from "../pages/Dashboard/Users/Users";
import Products from "../pages/Dashboard/Products/Products";
import AdminRoutes from "./AdminRoutes";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },{
                path:'/product/:id',
                element:<ShowProductDetails></ShowProductDetails>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<SignUp></SignUp>
            },
        ]
    },
    {
        path:'/dashboard',
        element: <AdminRoutes><Dashboard></Dashboard></AdminRoutes>,
        children:[
            {
                path:'',
                element:<Products />
            },
            {
                path:'users',
                element:<Users></Users>
            }
        ]
    }
]);

export default router