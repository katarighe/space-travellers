import { useSelector } from 'react-redux';
import styles from './Dragons.module.css';

function DragonList() {
  const { dragons } = useSelector((state) => state.dragons);
  return (
    <div className={styles.dragon_list_container}>
      <h2 className={styles.dragon_list_heading}>My Dragons</h2>
      <ul className={styles.dragon_list_holder}>
        {dragons
          .filter((dragon) => dragon.reserved)
          .map((dragon) => (
            <li className={styles.dragon_list} key={dragon.id}>{dragon.name}</li>
          ))}
      </ul>
    </div>
  );
}

export default DragonList;
