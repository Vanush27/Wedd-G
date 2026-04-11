/** @format */

import { useState } from "react";

import audioSrc from "@assets/audio/insatiable.mp3";
import styles from "./AudioPlayer.module.css";

import { motion } from "framer-motion";
import { PlayCircle, PauseCircle } from "lucide-react";
import ReactHowler from "react-howler";

const HowlerComponent = ReactHowler as any;

const AudioPlayer = ({ isInvitationOpen }: any) => {
  const [isPlaying, setIsPlaying] = useState(isInvitationOpen);

  return (
    <div>
      <HowlerComponent src={audioSrc} playing={isPlaying} loop html5 />

      <motion.button
        className={styles.button}
        onClick={() => setIsPlaying(!isPlaying)}
        animate={{ rotate: isPlaying ? 720 : 0 }}
        transition={{
          duration: 4,
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
    </div>
  );
};

export default AudioPlayer;
