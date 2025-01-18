import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {UserCartPage} from "../pages/UserCartPage.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";

export const router = createBrowserRouter([
    {path:'/',element:<MainLayout/>,children:[
            {index:true,element:<HomePage/>},
            {path:'users',element:<UsersPage/>},
            {path:'users/cart/:id',element:<UserCartPage/>}
        ]}
])
