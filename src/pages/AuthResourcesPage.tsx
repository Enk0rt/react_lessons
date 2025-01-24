import {useEffect} from "react";
import {loadAuthProducts, refresh} from "../services/api.service.ts";

//Створюємо функціональний компонент сторінки отримання продуктів авторизованим користувачем
export const AuthResourcesPage = () => {

    //Виконуємо запит на отримання продуктів в юз ефекті
    useEffect(() => {
        //відпрацьовує функція з аксіос запитом, через зен опрацьовуємо дані котрі отримали, виводимо їх в консоль
        loadAuthProducts().then(products => {
            console.log(products)
        }).catch(reason => { //коли кетчимо помилку, причину(reason) виводимо в консоль й викликаємо функцію рефреш
            console.log(reason);
            refresh()
                .then(() => loadAuthProducts()) // далі викликаємо функцію отримання продуктів
                .then(value => console.log(value)) //виводимо дані
        })

    }, []);

    return (
        <>
            AuthResourcesPage
        </>
    );
};
