import { useSelector } from 'react-redux';
import styles from './missionsprofile.module.css';

const MissionsProfile = () => {
  const missions = useSelector((state) => state.missions.missions);
  const joinedMissionsId = useSelector((state) => state.missions.joinedMissions);
  const joinedMissions = missions.filter(
    (mission) => joinedMissionsId.includes(mission.mission_id),
  );
  return (
    <div className={styles.profileContainer}>
      <section className={styles.missionsList}>
        <h2 className={styles.header}>My Missions</h2>
        <ul className={styles.missionItems}>
          {joinedMissions.map((mission) => (
            <li key={mission.mission_id} className={styles.missionItem}>{mission.mission_name}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default MissionsProfile;
