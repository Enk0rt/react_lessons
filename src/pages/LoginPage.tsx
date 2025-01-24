import {useEffect} from "react";
import {login} from "../services/api.service.ts";

//Створюємо функціональний компонент сторінки авторизації
export const LoginPage = () => {
    //Викликаємо юзефект
    useEffect(() => {
        //Передаємо об'єкт з даними щоб отримати назад юзера з ексес та рефреш токеном
        login({
            username: 'emilys',
            password: 'emilyspass',
            expiresInMins: 1
        });
    }, []);

    return (
        <>
            login Page
        </>
    );
};
