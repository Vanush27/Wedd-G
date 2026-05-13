/** @format */

import styles from "./MapDetalis.module.css";

interface MapsProps {
  url: string;
  name: string;
  address: string;
  time: string;
  img?: string;
}

const MapDetalis = ({ url, name, address, time, img }: MapsProps) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };

  return (
    <div className={styles.wrapper}>
      <h3>{name}</h3>
      <p>{time}</p>
      <h4>{address}</h4>

      <div className={styles.photoWrapper}>
        <img src={img} className={styles.images} alt="maps" />
      </div>

      <div className={styles.button_box}>
        <button onClick={handleClick} className={styles.map_button}>
          ինչպես հասնել
        </button>
      </div>
    </div>
  );
};

export default MapDetalis;
