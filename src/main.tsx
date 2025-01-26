import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {MainLayout} from "./components/layouts/MainLayout.tsx";
import {HomePage} from "./components/pages/HomePage.tsx";
import {UsersPage} from "./components/pages/UsersPage.tsx";

const router = createBrowserRouter([
    {path:"/",element:<MainLayout/>,children:[
            {path:'/',element:<HomePage/>,index:true},
            {path:'/users',element:<UsersPage/>}
        ] }
])

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router}/>
)

