import * as React from "react";

import styles from "./main.module.css";

import locationfor from "@assets/icons/locationfor.svg";
import location from "@assets/icons/location.svg";

import { Intro } from "@components/intro";
import ChurchPage from "@components/event-details/ChurchPage";
import Programmer from "@components/programmer/Programmer";
import HallPage from "@components/event-details/HallPage";
import { Footer } from "@components";

const MainScreen = () => (
  <div
    style={{ width: "100%" }}
    // className={cn(block.block(), block.modifyBlock({ open: isInvitationOpen }))}
  >
    <Intro />

    <div className={styles.wrapper}>
      <p className={styles.text_inv}>
        Սիրելի ընկերներ և հարազատներ,
        <b />
        Սիրով հրավիրում ենք Ձեզ մեր պսակադրությանը և հարսանյաց հանդեսին՝ կիսելու
        մեզ հետ այս հիշարժան օրը։
      </p>

      <p className={styles.text_date}>25.08.2025</p>
    </div>

    <div className={styles.container}>
      <img src={locationfor} alt="My SVG" className={styles.image} />
      <img src={location} alt="location" width={50} height={70} />

      <ChurchPage />
      <HallPage />
      <Programmer />
      <Footer />
    </div>
  </div>
);

export const MemoizedMainScreen = React.memo(MainScreen);
