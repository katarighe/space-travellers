import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../redux/missions/missionsSlice';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions);
  const loading = useSelector((state) => state.missions.loading);
  const error = useSelector((state) => state.missions.error);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? (
        <p>
          Error:
          {error}
        </p>
      ) : null}
      <div>
        {missions.map((mission) => (
          <div key={mission.mission_id}>
            <h1>{mission.mission_name}</h1>
            <p>{mission.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Missions;
