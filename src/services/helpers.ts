//Функція отримання інформації з локал стореджа
export const retriveLocalStorage = <T>(key: string) => {
    //Визначаємо і отримуємо об'єкт
    const object = localStorage.getItem(key) || '';
    //Перевірка на об'єкт. Якщо не об'єкт, То повернемо пустий об'єкт з загальним типом даних
    if (!object) {
        return {} as T;
    }
    //Парсимо отриманий об'єкт
    const parse = JSON.parse(object);
    return parse as T;

}
