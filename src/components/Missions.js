import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission } from '../redux/missions/missionsSlice';
import styles from './missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const handleJoinMission = (missionId) => {
    dispatch(joinMission(missionId));
  };

  return (
    <div className={styles.missionsContainer}>
      {loading ? <p>Loading...</p> : null}
      {error ? (
        <p>
          Error:
          {error}
        </p>
      ) : null}
      <table className={styles.table}>
        <thead>
          <th className={styles.cell}>Mission</th>
          <th className={styles.cell}>Discription</th>
          <th className={styles.cell}>Status</th>
          <th className={styles.cell}>...</th>
        </thead>
        <tbody />
        {missions.map((mission, index) => (
          <tr key={mission.mission_id} className={index % 2 === 0 ? styles.bgDark : null}>
            <td className={`${styles.cell} ${styles.mission}`}>{mission.mission_name}</td>
            <td className={styles.cell}>{mission.description}</td>
            <td className={styles.cell}>
              <button className={mission.status === 'joined' ? styles.active : styles.status} type="button">
                {mission.status === 'joined' ? 'active member' : 'not a member'}
              </button>
            </td>
            <td className={styles.cell}>
              <button
                className={`${styles.statusBtn} ${styles.statusBtnJoin} ${mission.statusBtn === 'leave mission' ? styles.statusBtnLeave : null}`}
                onClick={() => handleJoinMission(mission.mission_id)}
                type="button"
              >
                {mission.statusBtn || 'join mission'}
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Missions;
