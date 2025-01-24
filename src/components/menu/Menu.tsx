import {Link} from "react-router-dom";


//Створюємо функціональний компонент Меню
const Menu = () => {
    return (
        <div>
            <ul>
                //Обгортаємо в спеціальний компонент-обгортку як заміна тегу "а" - Link і вказуємо пас для роута
                <li><Link to={'/'}>home</Link></li>
                <li><Link to={'/login'}>login</Link></li>
                <li><Link to={'/auth/resources'}>resources</Link></li>
            </ul>
            <hr/>

        </div>
    );
};

export default Menu;
