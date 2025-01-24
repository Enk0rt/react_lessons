import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout.tsx";
import {HomePage} from "../pages/HomePage.tsx";
import {LoginPage} from "../pages/LoginPage.tsx";
import {AuthResourcesPage} from "../pages/AuthResourcesPage.tsx";


//Створюємо роутер
export const routes = createBrowserRouter([
    {
        //Прописуємо базовий пас рутової сторінки, й вказуємо головний леяут
        path: '/', element: <MainLayout/>, children: [ //Визначаємо чілдренів
            //індекс сторінка, котра перша рендериться коли юзер заходить на сайт
            {index: true, element: <HomePage/>},
            //Сторінка логінації
            {path: 'login', element: <LoginPage/>},
            //Сторінка на якій відображається інфа авторизованого юзера
            {path: '/auth/resources', element: <AuthResourcesPage/>},
        ]
    }
]);
