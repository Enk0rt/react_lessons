import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div className='bg-green-100'>
            <div className='wrapper'>
                <h2 className='logo'>Homework 3.1</h2>
                <ul className='nav'>
                    <li className='nav__item'>
                        <Link className='block' to={'/'}>Home</Link>
                    </li>
                    <li className='nav__item'>
                        <Link className='block' to={'users'}>Users</Link>
                    </li>
                    <li className='nav__item'>
                        <Link className='block' to={'posts'}>Posts</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};
