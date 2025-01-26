import {FC, memo} from "react";

type UserProps = {
    fn: () => void,
    arr: number[],
}

// Так як компонент UserList ререндериться при виконанні хука useEffect і в даній компоненті нічого після цього не змінюється, то загортаємо в memo, щоб прибрати зайвий ререндер компонента
export const User: FC<UserProps> = memo(({fn, arr}) => {

    fn() //виклик переданої закешованої функції
    console.log(arr) //виклик в консоль переданого закешованого масиву
    console.log('user')

    return (
        <div>
            User
        </div>
    );
});

