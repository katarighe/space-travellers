import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  return (
    <div className={styles.profile_page}>
      <div className={styles.my_profile}>
        <div className={styles.my_missions}>
          <h2>My Rockets</h2>
          <ul>
            {rockets.filter((rocket) => rocket.reserved === true)
              .map((rocket) => (
                <li key={rocket.id}>{rocket.name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Profile;
