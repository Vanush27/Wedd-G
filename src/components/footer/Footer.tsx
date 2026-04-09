/** @format */

import styles from "./Foter.module.css";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <svg
        width="360"
        height="100"
        viewBox="0 0 360 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 80 
       C100 60, 260 100, 350 80"
          stroke="#b22222"
          stroke-width="3"
          fill="none"
        />
      </svg>

      <h3 className={styles.sirov}>Սիրով կսպասենք Ձեզ</h3>
      <path
        d="M0 40 
       Q40 0, 80 25 
       T160 30 
       T240 35 
       T320 30 
       T360 40 
       L360 0 L0 0 Z"
        fill="#e9e1d8"
      />
      <svg
        width="360"
        height="200"
        viewBox="0 0 360 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16 90 
       C90 60, 250 150, 350 70"
          stroke="#b22222"
          stroke-width="3"
          fill="none"
        />
      </svg>
    </div>
  );
};

export default Footer;
