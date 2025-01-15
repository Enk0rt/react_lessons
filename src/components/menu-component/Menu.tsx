import {Link} from "react-router-dom";

const Menu = () => {
    return (
    <div className='bg-white text-black'>
        <div className='wrapper'>
            <h2 className='uppercase font-bold'>Homework 3.2</h2>
                <ul className='nav'>
                    <li className='nav__item'>
                        <Link className='block' to={'/'}>Home</Link>
                    </li>
                    <li className='nav__item'>
                        <Link className='block' to={'/users'}>Users</Link>
                    </li>
                    </ul>
                </div>
        </div>
    );
};

export default Menu;