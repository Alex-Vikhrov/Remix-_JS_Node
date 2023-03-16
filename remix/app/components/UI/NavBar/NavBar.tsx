import { NavLink } from "@remix-run/react";
import { FC } from "react";

const links = [
    { id: 1, to: '/', link: 'Home', },
    { id: 2, to: '/notes', link: 'My Notes', },
];

const NavBar: FC = () => {
    return (
        <nav className="main-nav">
            <ul>
                {links.map(link =>
                    <li key={link.id} className="nav-item active">
                        <NavLink to={link.to}>{link.link}</NavLink>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default NavBar;