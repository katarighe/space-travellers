import { useSelector } from 'react-redux';
import styles from './dragonsprofile.module.css';

function DragonsProfile() {
  const { dragons } = useSelector((state) => state.dragons);

  return (
    <section className={styles.dragonProfileContainer}>
      <h2 className={styles.header}>My Dragons</h2>
      <ul className={styles.dragonItems}>
        {dragons
          .filter((dragon) => dragon.reserved)
          .map((dragon) => (
            <li className={styles.dragonItem} key={dragon.id}>{dragon.name}</li>
          ))}
      </ul>
    </section>
  );
}

export default DragonsProfile;
