import { useSelector } from "react-redux";
import styles from "./profile.module.css";
import DragonList from "./DragonList";

const Profile = () => {
  const { rockets } = useSelector((state) => state.rockets);

  const joinedMissions = useMemo(() => {
    return missions.filter((mission) =>
      joinedMissionsId.includes(mission.mission_id)
    );
  }, [joinedMissionsId]);

  return (
    <div className={styles.profile_page}>
      <div className={styles.my_profile}>
        <div className={styles.my_missions}>
          <h2>My Rockets</h2>
          <ul>
            {rockets
              .filter((rocket) => rocket.reserved)
              .map((rocket) => (
                <li key={rocket.rocket_id}>{rocket.rocket_name}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
return (
  <div className={styles.profileContainer}>
    <section className={styles.missionsList}>
      <h2 className={styles.header}>My Missions</h2>
      <ul className={styles.missionItems}>
        {joinedMissions.map((mission) => (
          <li key={mission.mission_id} className={styles.missionItem}>
            {mission.mission_name}
          </li>
        ))}
      </ul>
    </section>
    <DragonList />
  </div>
);

function DragonList() {
  const { dragons } = useSelector((state) => state.dragons);
  return (
    <div className={styles.dragon_list_container}>
      <h2 className={styles.dragon_list_heading}>My Dragons</h2>
      <ul className={styles.dragon_list_holder}>
        {dragons
          .filter((dragon) => dragon.reserved)
          .map((dragon) => (
            <li className={styles.dragon_list} key={dragon.id}>
              {dragon.name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Profile;
