import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div className='mt-1'>
            <ul className='flex border my-0 mx-auto w-1/4'>
                <li className='bg-red-100 w-1/2 text-center'><Link  className='block text-black' to={'/'}>Home</Link></li>
                <li className='bg-green-100 w-1/2 text-center'><Link className='block  text-black' to={'users'}>Users</Link></li>
                <li className='bg-green-100 w-1/2 text-center'><Link className='block  text-black' to={'posts'}>Posts</Link></li>
            </ul>
        </div>
    );
};

export default Menu;