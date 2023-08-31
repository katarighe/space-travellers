import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reserveDragon } from '../redux/dragons/dragonsSlice';
import styles from './Dragons.module.css';

const Dragons = () => {
  const dispatch = useDispatch();

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
            <p className={styles.dragon_type}>
              {dragon.reserved && <button type="button" className={styles.dragon_reserved}>Reserved</button>}
              {dragon.type}
            </p>
            <button type="button" className={dragon.reserved ? styles.dragon_cancel : styles.dragon_button} onClick={() => dispatch(reserveDragon(dragon.id))}>
              {dragon.reserved ? 'Cancel Reservation' : 'Reserve Dragon'}
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Dragons;
