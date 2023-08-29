import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import styles from './navbar.module.css';

const Navbar = () => {
  const [links, setLinks] = useState([
    {
      id: 1,
      path: '/',
      text: 'Rockets',
      active: true,
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
      active: false,
    },
    {
      id: 3,
      path: '/dragons',
      text: 'Dragons',
      active: false,
    },
  ]);

  const activeClick = (clickedLink) => {
    const updatedLinks = links.map((link) => (link.text === clickedLink.text
      ? { ...link, active: true }
      : { ...link, active: false }));
    setLinks(updatedLinks);
  };

  return (
    <nav>
      <div className={styles.leftContainer}>
        <img src={planet} alt="Logo" className={styles.brandLogo} />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <ul className={styles.links}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={`${styles.link} ${link.active ? styles.active : null}`}
              onClick={() => activeClick(link)}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
        <NavLink to="/profile" className={`${styles.link}`}>
          | My Profile
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
