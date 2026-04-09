/** @format */

import ScheduleAnimated from "@ui-kit/ScheduleAnimated/ScheduleAnimated";
import RSVPFormt from "../RSVP/RSVPform";

import styles from "./Programmer.module.css";

const Programmer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.image}>Timeline</p>
      <ScheduleAnimated />
      <RSVPFormt />
    </div>
  );
};

export default Programmer;
