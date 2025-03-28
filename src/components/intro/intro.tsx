import * as React from "react";

import foregraound_image from "../../assets/images/foreground.jpg";

import styles from "./intro.module.css";
import CircleTimerCountdown from "@ui-kit/CircleTimerCountdown/CountdownCircleTimer";
import Title from "@components/text/Title";

const Intro = () => {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.title}>
          <Title />
        </div>

        {/* <p }>ԳՈՌ ԵՎ ՄԱՆԵ</p> */}
        <img
          src={foregraound_image}
          alt="My SVG"
          width={"100%"}
          height={"100%"}
        />
        <CircleTimerCountdown />
      </div>
    </div>
  );
};

export const MemoizedIntro = React.memo(Intro);
