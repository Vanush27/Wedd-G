import { useInView } from "react-intersection-observer";

import styles from "./Timeline.module.css";
import HeartLine from "./HeartLine";

const Timeline = () => {
  const [firstEventRef, firstEventInView] = useInView({ threshold: 0 });
  const [secondEventRef, secondEventInView] = useInView({ threshold: 0 });
  const [thirdEventRef, thirdEventInView] = useInView({ threshold: 0 });

  return (
    <div className={styles.timeline}>
      {/* Event 1 */}
      <div
        ref={firstEventRef}
        className={`${styles.event} ${
          firstEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p className={styles.text_time}>16:00 - 16:30</p>
        <p className={styles.text}>Պսակադրություն</p>
      </div>

      <HeartLine number="01" />

      {/* Event 2 */}
      <div
        ref={secondEventRef}
        className={`${styles.event} ${
          secondEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p className={styles.text_time}>17:30 - 00:00</p>
        <p className={styles.text}>Հարսանյաց հանդիսություն</p>
      </div>

      <HeartLine number="02" />

      {/* Event 3 */}
      <div
        ref={thirdEventRef}
        className={`${styles.event} ${
          thirdEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p className={styles.text_time}>23:00 - 23:20</p>
        <p className={styles.text}>Տորթի կտրման արարողություն</p>
      </div>
    </div>
  );
};

export default Timeline;
