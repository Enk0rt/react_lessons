import {createBrowserRouter,} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages/UsersPage.tsx";
import {UsersCartPage} from "../pages/UsersCartPage.tsx";
import Home from "../pages/Home.tsx";

export const routes = createBrowserRouter([{
    path: '/', element: <MainLayout/>, children: [
        {index: true, element: <Home/>},
        {path: '/users', element: <UsersPage/>,
            children: [
                {path: ':id/carts', element: <UsersCartPage/>}
            ]
        },
    ]
}])