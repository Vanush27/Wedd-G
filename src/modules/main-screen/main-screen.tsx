import * as React from "react";

import styles from "./main.module.css";

import locationfor from "@assets/icons/locationfor.svg";
import location from "@assets/icons/location.svg";

import { Intro } from "@components/intro";
import ChurchPage from "@components/event-details/ChurchPage";
import Programmer from "@components/programmer/Programmer";
import HallPage from "@components/event-details/HallPage";

const MainScreen = () => (
  <div
    style={{ width: "100%" }}
    // className={cn(block.block(), block.modifyBlock({ open: isInvitationOpen }))}
  >
    <Intro />

    <div
      className={styles.container}

      // className={block.element("content")}
    >
      <img
        src={locationfor}
        alt="My SVG"
        // className={block.element("image")}
      />
      <img
        src={location}
        alt="location"
        width={50}
        height={70}
        // className={block.element("location_icon")}
      />

      <ChurchPage />
      <HallPage />
      <Programmer />
    </div>
  </div>
);

export const MemoizedMainScreen = React.memo(MainScreen);
