/** @format */

import couplePhoto from "@assets/images/foreground.jpg";

import styles from "./loveHeroScreen.module.css";

/** Կարմիր սիրտ (emoji — համակարգային կարմիր) */
// const HEART = "\u2764\uFE0F";
const HEART = " ";
const PATTERN_CHUNK = "I Love You";
const PATTERN_LINE = Array(14).fill(PATTERN_CHUNK).join(` ${HEART} `);

export interface LoveHeroScreenProps {
  coupleNames?: string;
  photoSrc?: string;
  photoAlt?: string;
}

const LoveHeroScreen = ({
  coupleNames = "Սամվել և Միլենա",
  photoSrc,
  photoAlt = "",
}: LoveHeroScreenProps) => {
  const src = photoSrc ?? couplePhoto;

  return (
    <section className={styles.screen} aria-label={coupleNames}>
      <div className={styles.patternWrap} aria-hidden>
        <div className={styles.patternInner}>
          {Array.from({ length: 22 }, (_, i) => (
            <div key={i} className={styles.patternLine}>
              {PATTERN_LINE}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.photoWrap}>
          <img className={styles.photo} src={src} alt={photoAlt} />
        </div>

        <h1 className={styles.names}>{coupleNames}</h1>

        <div className={styles.scrollHint} aria-hidden>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default LoveHeroScreen;
