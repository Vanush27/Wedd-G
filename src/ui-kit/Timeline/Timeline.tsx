import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./Timeline.module.css";

const Timeline = () => {
  const linesRef = useRef<(HTMLDivElement | null)[]>([]);

  const [firstEventRef, firstEventInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const [secondEventRef, secondEventInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const [thirdEventRef, thirdEventInView] = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  // const [fourthEventRef, fourthEventInView] = useInView({
  //   triggerOnce: false,
  //   threshold: 0,
  // });

  // const [fifthEventRef, fifthEventInView] = useInView({
  //   triggerOnce: false,
  //   threshold: 0,
  // });

  useEffect(() => {
    const handleScroll = () => {
      linesRef.current.forEach((line) => {
        const linePosition = line?.getBoundingClientRect().top as number;
        const screenPosition = window.innerHeight / 1.2;

        if (linePosition < screenPosition) {
          line?.classList.add(styles.visible);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [linesRef]);

  return (
    <div className={styles.timeline}>
      <div
        ref={(el: any) => (linesRef.current[0] = el)}
        className={styles.line}
      />

      <div
        ref={firstEventRef}
        className={`${styles.event} ${
          firstEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p
          className={`${styles.text_time} ${
            firstEventInView ? styles.animateRight : styles.hidden
          }`}
        >
          13:00 - 14:00
        </p>
        <p
          className={`${styles.text} ${
            firstEventInView ? styles.animateLeft : styles.hidden
          }`}
        >
          Պսակադրություն
        </p>
      </div>

      <div
        ref={(el: any) => (linesRef.current[1] = el)}
        className={styles.line}
      />

      <div
        ref={secondEventRef}
        className={`${styles.event} ${
          secondEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p
          className={`${styles.text_time} ${
            secondEventInView ? styles.animateRight : styles.hidden
          }`}
        >
          17:30 - 00:000
        </p>
        <p
          className={`${styles.text} ${
            secondEventInView ? styles.animateLeft : styles.hidden
          }`}
        >
          Հարսանյաց հանդիսություն
        </p>
      </div>

      <div
        ref={(el: any) => (linesRef.current[2] = el)}
        className={styles.line}
      />

      <div
        ref={thirdEventRef}
        className={`${styles.event} ${
          thirdEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p
          className={`${styles.text_time} ${
            thirdEventInView ? styles.animateRight : styles.hidden
          }`}
        >
          00:00 - 00:00
        </p>
        <p
          className={`${styles.text} ${
            thirdEventInView ? styles.animateLeft : styles.hidden
          }`}
        >
          Տորթի կտրման արարողություն
        </p>
      </div>

      {/* <div ref={(el) => (linesRef.current[3] = el)} className={styles.line} /> */}

      {/* <div
        ref={fourthEventRef}
        className={`${styles.event} ${
          fourthEventInView ? styles.animateLeft : styles.hidden
        }`}
      >
        <p
          className={`${styles.text_time} ${
            fourthEventInView ? styles.animateRight : styles.hidden
          }`}
        >
          17:30 - 23:00
        </p>
        <p
          className={`${styles.text} ${
            fourthEventInView ? styles.animateLeft : styles.hidden
          }`}
        >
          Հարսանյաց հանդիսություն
        </p>
      </div> */}
    </div>
  );
};

export default Timeline;
