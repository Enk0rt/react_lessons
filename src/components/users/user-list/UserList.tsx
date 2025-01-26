
import {useCallback, useEffect, useMemo, useState} from "react";
import {IUser} from "../../../models/IUser.tsx";
import {User} from "../user/User.tsx";

export const UserList = () => {

    //Використали хук useCallback щоб закешувати функцію й не створювати її наново кожного разу коли відбувається рендер сторінки, якщо стейт/змінна в депсах змінюватиметься, то тільки у такому разі функція буде створюватись нова функція і відповідно передаватиметься в User також уже нова створена функція
    const [users, setUsers] = useState<IUser[]>([]);
    const fn = useCallback(() => {
        console.log('user list')
    },[])

    //Коли рендериться сторінка створюється нова змінна arr, оскільки це масив то змінюється посилання на нього, тому це викликає ререндер компонента User, який використовує цю змінну. Щоб уникнути зайвого ререндеру кешуємо змінну, обгорнувши в useMemo, бо вона сама по собі не має змінюватись, тому і рендер відповідно не потрібен
    const arr = useMemo(() => [1,2,3,4,5],[])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then((users:IUser[])=> setUsers(users));
        }, []);

    return (
        <div>
            <User fn={fn} arr={arr}/>
        </div>
    );
};

