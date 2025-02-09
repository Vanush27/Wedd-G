import * as React from "react";

import CircleTimerCountdown from "@ui-kit/CircleTimerCountdown/CountdownCircleTimer";
// import foregraound_image from " @assets/images/foreground.jpg";
import foregraound_image from "../../assets/images/foreground.jpg";

import styles from "./intro.module.css";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src={foregraound_image}
          alt="My SVG"
          width={"100%"}
          height={"100%"}
        />
        <CircleTimerCountdown />
      </div>

      {/* <Timer /> */}
    </div>
  );
};

export const MemoizedIntro = React.memo(Intro);

{
  /* <p>
  {"Մենք հրավիրում ենք ձեզ մեր հարսանիքին"}</p>
        <p>
          <span className="number">{"25 օգոստոս\n 2025"}</span>
        </p> */
}
