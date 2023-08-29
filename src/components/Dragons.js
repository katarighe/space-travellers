import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../redux/dragons/dragonsSlice';
import '../dragon.css';

const Dragons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  const { loading, error, dragons } = useSelector((state) => state.dragons);

  return (
    <section className="dragon-container">
      {loading && <p>Dragons loading, please wait!</p>}
      {error && <p>Error loading dragons, please try again!</p>}
      {dragons.map((dragon) => (
        <div key={dragon.id} className="dragon-id">
          <div className="dragon-info">
            <img src={dragon.flickr_images[0]} alt="dragon" className="dragon-img" />
          </div>
          <div className="d-name-type">
            <h2 className="dragon-name">{dragon.name}</h2>
            <p className="dragon-type">{dragon.type}</p>
            <button type="button" className="dragon-button">
              Reserve Dragon
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Dragons;
