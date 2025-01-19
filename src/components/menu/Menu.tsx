import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div className={'bg-emerald-900 h-16 flex items-center'}>
            <div className={'flex justify-between items-center w-4/5 mx-auto'}>
                <h2 className={'uppercase'}>Homework 3.3</h2>
                <ul className={'flex justify-end gap-10 w-96'}>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'users'}>Users</Link></li>
                </ul>
            </div>
        </div>
    );
};

