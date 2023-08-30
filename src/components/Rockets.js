import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets, cancelReservation, reserveRocket } from '../redux/rockets/rocketsSlice';
import styles from './Rockets.module.css';

const Rockets = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (status) {
    return <div className="loading">Loading, please wait...</div>;
  }

  if (error) {
    return (
      <div className="error">Error loading!</div>
    );
  }

  return (
    <div className={styles.rocket_container}>
      {rockets.map((rocket) => (
        <section className={styles.space} key={rocket.rocket_id}>
          <div className={styles.img}>
            <img src={rocket.flickr_images[0]} alt="" />
          </div>
          <div className={styles.details}>
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            {rocket.reserved && (
              // render Cancel Rocket button
              <button
                type="button"
                className={styles.cancel_reserve_rocket_btn}
                onClick={() => dispatch(cancelReservation(rocket.id))}
              >
                Cancel Reservation
              </button>
            )}
            {!rocket.reserved && (
              // render Reserve Rocket button
              <button
                type="button"
                className={styles.reserve_rocket_btn}
                onClick={() => dispatch(reserveRocket(rocket.id))}
              >
                Reserve Rocket
              </button>
            )}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Rockets;
