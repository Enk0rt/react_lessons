import axios from 'axios';
import {IUserWithTokens} from "../models/IUserWithTokens.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {retriveLocalStorage} from "./helpers.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

//Типізація логінації
type LoginData = {
    username: string;
    password: string;
    expiresInMins: number //Тут буде міститися число яке означатиме кількість хвилин до знищення токена
}

const axiosInstance = axios.create({  // Задаємо аксіос
    baseURL: 'https://dummyjson.com/auth', // Встановлюємо базову урлу АПІ з якого будемо брати інфу
    headers: {} // Тут будуть зберігатися хедери які будуть додаватися до запиту
});

//Додаємо до аксіос запиту перехоплювачі запиту, щоб додати до хедера отриманий ексес токен
axiosInstance.interceptors.request.use((requestObject) => {
    //Якщо є запит
    if (requestObject.method?.toUpperCase() === 'GET') {
        //Додаємо до запиту хедер з назвою Authorization та значенням Bearer + ексес токен юзера з локал стореджа
        requestObject.headers.Authorization = 'Bearer ' + retriveLocalStorage<IUserWithTokens>('user').accessToken
    }
    return requestObject;

})

//Визначаємо логін як асинхронну функцію в яку передається юзернейм, пароль і час до знищення
export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {

    //Очікуємо поки запит надішле дані на сервер, по пасу /login, й отримає назад юзера, але уже з ексес та рефреш токенами
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    //Сетаємо в локал сторедж отриманого юзера (Ключ "user", а в значення усі поля отриманого об'єкта)
    localStorage.setItem('user', JSON.stringify(userWithTokens));
    return userWithTokens;
}

//Визначаємо асинхронну функцію для отримання продуктів авторизованим користувачем, вона буде повертати проміс в якому буде масив продуктів з інтерфейсом IProduct
export const loadAuthProducts = async (): Promise<IProduct[]> => {
    //Одразу деструктуризуємо отриманий об'єкт
    const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products');

    return products
}

//Визначаємо асинхронну функцію рефреш
export const refresh = async () => {

    //Отримуємо юзер з токенами з локал стореджа через відповідну написану функцію
    const iUserWithTokens = retriveLocalStorage<IUserWithTokens>('user');

    //Отримуємо нові ексес токен і рефреш токен як результат аксіос пост запиту на пас refresh, щоб оновити пару токенів
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithTokens.refreshToken,
        expiresInMin: 1
    });

    //Присвоюємо юзеру щойно отриману нову пару токенів
    iUserWithTokens.accessToken = accessToken; //Ексес токен
    iUserWithTokens.refreshToken = refreshToken; //Рефреш токен
    localStorage.setItem('user', JSON.stringify(iUserWithTokens)); //Сетаємо оновленого юзера до локал стореджу


}
