import time from "@assets/icons/timeforyou.svg";
import RSVPFormt from "../RSVP/RSVPform";

import styles from "./Programmer.module.css";
import Timeline from "@ui-kit/Timeline/Timeline";

const Programmer = () => {
  return (
    <div className={styles.container}>
      <img src={time} alt="time for you" className={styles.programmerImg} />
      <Timeline />
      <RSVPFormt />
    </div>
  );
};

export default Programmer;
