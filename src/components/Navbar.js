import { NavLink } from 'react-router-dom';
import planet from '../assets/planet.png';
import styles from './navbar.module.css';

const Navbar = () => (
  <nav>
    <div className={styles.leftContainer}>
      <img src={planet} alt="Logo" className={styles.brandLogo} />
      <h1>Space Travelers&apos; Hub</h1>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <NavLink
          to="/"
          className={styles.link}
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          {' '}
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/missions"
          className={styles.link}
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          Missions
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dragons"
          className={styles.link}
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          Dragons
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/profile"
          className={styles.link}
          style={({ isActive }) => (isActive ? { textDecoration: 'underline' } : {})}
        >
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
