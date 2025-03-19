import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ShowProductDetails from "../pages/ShowProductDetails/ShowProductDetails";
import Login from "../pages/login/login";
import Register from "../pages/register/register";

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
                element:<Register></Register>
            },
        ]
    },
]);

export default router