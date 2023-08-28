import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';

const Navbar = () => {
    const links = [
        {
            id: 1,
            path: '/',
            text: 'Rockets'
        },
        {
            id: 2,
            path: '/missions',
            text: 'Missions',
        },
        {
            id: 3,
            path: '/dragons',
            text: 'Dragons',
        },
    ];

    return (
        <header>
            <nav>
                <h1>
                    <img src={planet} alt="Logo" />
                    {' '}
                    Space Travelers&apos; Hub
                </h1>
                <ul>
                    {links.map((link) => (
                        <li key={link.id} className="nav-link">
                            <NavLink to={link.path}>{link.text}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};