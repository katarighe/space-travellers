import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import './Rockets.module.css';

const Rockets = () => {
  const { rockets, status, error } = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  if (status) {
    return <div className="loading">Loading, please wait....</div>;
  }

  if (error) {
    return (
      <div className="error">Error loading rocket list, please try again!</div>
    );
  }

  return (
    <div className="rocket_container">
      {rockets.map((rocket) => (
        <section className="space" key={rocket.rocket_id}>
          <div className="img">
            <img src={rocket.rocket_flickr_images} alt="" />
          </div>
          <div className="details">
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            <button className="rocket_btn" type="button">
              Reserve Rocket
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Rockets;
