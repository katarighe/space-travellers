import { useSelector } from 'react-redux';
import styles from './rocketsprofile.module.css';

const RocketsProfile = () => {
  const { rockets } = useSelector((state) => state.rockets);
  return (
    <section className={styles.rocketsprofileContainer}>
      <h2 className={styles.header}>My Rockets</h2>
      <ul className={styles.rocketItems}>
        {rockets.filter((rocket) => rocket.reserved)
          .map((rocket) => (
            <li key={rocket.rocket_id} className={styles.rocketItem}>{rocket.rocket_name}</li>
          ))}
      </ul>
    </section>

  );
};

export default RocketsProfile;
