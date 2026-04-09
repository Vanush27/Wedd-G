/** @format */

import rsvpImage from "@assets/images/RSVP_envelope.png";

import InviteForm from "../form/InviteForm";
import styles from "./RSVPform.module.css";

const RSVPFormt = () => {
  return (
    <div className={styles.container}>
      <img src={rsvpImage} alt="rsvpImage" className={styles.images} />
      <div>
        <p className={styles.text}>
          Խնդրում ենք հաստատել Ձեր մասնակցությունը մինչև հունիսի 15-ը։
        </p>
      </div>
      <InviteForm />
    </div>
  );
};

export default RSVPFormt;
