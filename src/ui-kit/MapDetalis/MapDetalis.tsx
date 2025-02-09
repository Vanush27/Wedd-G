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
    <div>
      <div className={styles.wrapper}>
        <h3>{name}</h3>
        <p>{time}</p>
        <p>{address}</p>

        <img src={img} className={styles.images} alt="maps" />

        <div className={styles.button_box}>
          <button onClick={handleClick} className={styles.map_button}>
            Քարտեզ
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapDetalis;
