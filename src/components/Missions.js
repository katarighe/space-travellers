import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';
import styles from './missions.module.css';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

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
          <th colSpan={1} className={styles.cell}>Mission</th>
          <th colSpan={1} className={styles.cell}>Discription</th>
          <th colSpan={1} className={styles.cell}>Status</th>
          <th colSpan={1} className={styles.cell}>...</th>
        </thead>
        <tbody />
        {missions.map((mission, index) => (
          <tr key={mission.mission_id} className={index % 2 === 0 ? styles.bgDark : null}>
            <td className={styles.cell}>{mission.mission_name}</td>
            <td className={styles.cell}>{mission.description}</td>
            <td className={styles.cell}>
              <span className={styles.status}>not a member</span>
            </td>
            <td className={styles.cell}>
              <span className={`${styles.statusBtn} ${styles.statusBtnJoin}`}>
                join
                {' '}
                mission
              </span>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Missions;
