/** @format */

import styles from "./loveHeroScreen.module.css";

export interface LoveHeroScreenProps {
  coupleNames?: string;
}

const LoveHeroScreen = ({
  coupleNames = "Սամվել և Միլենա",
}: LoveHeroScreenProps) => {
  return (
    <section className={styles.screen} aria-label={coupleNames}>
      <div className={styles.content}>
        <h1 className={styles.names}>{coupleNames}</h1>
      </div>
      <div className={styles.scrollHint} aria-hidden>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default LoveHeroScreen;
