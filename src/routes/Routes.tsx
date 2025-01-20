import {useRoutes} from "react-router-dom";
import {AppRoutes} from "./const.ts";
import {lazy, Suspense} from "react";

const Home = lazy(() => import('../pages/home/HomePage.tsx'))
const Users = lazy(() => import('../pages/users/UsersPage.tsx'))

export const RoutesComponent = () => useRoutes([
    {
        element: (
            <Suspense fallback={<div><p>...loading</p></div>}>
                <Home/>
            </Suspense>
        ),
        path: AppRoutes.root,
        index: true,
    },
    {
        element:
            (<Suspense fallback={<h1>Loading...</h1>}>
                <Users/>
            </Suspense>
            ),
        path: AppRoutes.users
    }
]);

