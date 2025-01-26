import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <Link to={'/'}><li>Home</li></Link>
                <Link to={'/users'}><li>Users</li></Link>
            </ul>
        </div>
    );
}

