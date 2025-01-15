import {createBrowserRouter,} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {UsersPage} from "../pages-model/UsersPage.tsx";
import {UsersCartPage} from "../pages-model/UsersCartPage.tsx";
import Home from "../pages-model/Home.tsx";

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