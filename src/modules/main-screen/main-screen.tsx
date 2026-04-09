/** @format */

import * as React from "react";

import { LoveHeroScreen } from "@components/love-hero";
import ChurchPage from "@components/event-details/ChurchPage";
import Programmer from "@components/programmer/Programmer";
import HallPage from "@components/event-details/HallPage";

import rsvpImage from "@assets/images/wedding_invitation.png";

import { WeddingCalendar } from "@components/calendar";

import { Footer } from "@components";

import styles from "./main.module.css";

const MainScreen = () => (
  <div style={{ width: "100%" }}>
    <LoveHeroScreen />

    <div className={styles.wrapper}>
      <img src={rsvpImage} alt="rsvpImages" className={styles.images} />
      <WeddingCalendar year={2026} month={5} highlightDay={21} />
    </div>

    <div className={styles.container}>
      <p className={styles.image}> Locations</p>
      <ChurchPage />
      <HallPage />
      <Programmer />
      <Footer />
    </div>
  </div>
);

export const MemoizedMainScreen = React.memo(MainScreen);
