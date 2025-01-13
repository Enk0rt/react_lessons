import {createBrowserRouter} from "react-router-dom";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {Home} from "../pages/Home.tsx";

export const routes = createBrowserRouter([
    {path: '/', element: <MainLayout/>,
        children:[
            {index:true,element:<Home/>},
            {path:'/users',element:<UsersPage/>},
            {path:'/posts',element:<PostsPage/>},
        ]
    },

]);