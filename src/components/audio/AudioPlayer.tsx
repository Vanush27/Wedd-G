/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { PlayCircle, PauseCircle } from "lucide-react";
import ReactHowler from "react-howler";

import audioSrc from "@assets/audio/insatiable.mp3";
import styles from "./AudioPlayer.module.css";

const HowlerComponent = ReactHowler as any;

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <HowlerComponent src={audioSrc} playing={isPlaying} loop />

      <motion.button
        className={styles.button}
        onClick={() => setIsPlaying((prev) => !prev)}
        animate={{ rotate: isPlaying ? 720 : 0 }}
        transition={{
          duration: 10,
          repeat: isPlaying ? Infinity : 0,
          ease: "linear",
        }}
      >
        {isPlaying ? (
          <PauseCircle size={60} className={styles.icon} />
        ) : (
          <PlayCircle size={60} className={styles.icon} />
        )}
      </motion.button>
    </>
  );
};

export default AudioPlayer;
