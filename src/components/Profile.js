import RocketsProfile from './RocketsProfile';
import MissionsProfile from './MissionsProfile';
import DragonsProfile from './DragonsProfile';
import styles from './Profile.module.css';

const Profile = () => (
  <div className={styles.profileContainer}>
    <RocketsProfile />
    <MissionsProfile />
    <DragonsProfile />
  </div>
);

export default Profile;
