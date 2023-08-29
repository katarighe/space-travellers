import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDragons } from '../redux/dragons/dragonsSlice';
import styles from './';

const Dragons = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDragons());
  }, [dispatch]);

  const { loading, error, dragons } = useSelector((state) => state.dragons);

  return (
    <section className={styles.dragon_container}>
      {loading && <p>Dragons loading, please wait!</p>}
      {error && <p>Error loading dragons, please try again!</p>}
      {dragons.map((dragon) => (
        <div key={dragon.id} className={styles.dragon_id}>
          <div className={styles.dragon_info}>
            <img src={dragon.flickr_images[0]} alt="dragon" className={styles.dragon_img} />
          </div>
          <div className={styles.d_name_type}>
            <h2 className={styles.dragon_name}>{dragon.name}</h2>
            <p className={styles.dragon_type}>{dragon.type}</p>
            <button type="button" className={styles.dragon_button}>
              Reserve Dragon
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Dragons;
