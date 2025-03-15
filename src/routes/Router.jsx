import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import ShowProductDetails from "../pages/ShowProductDetails/ShowProductDetails";

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
            }
        ]
    },
]);

export default router