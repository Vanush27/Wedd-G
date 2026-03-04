import { useEffect, useRef, useState } from "react";
import styles from "./Timeline.module.css";

interface HeartLineProps {
  number: string;
}

const HeartLine: React.FC<HeartLineProps> = ({ number }) => {
  const pathRef = useRef<SVGPathElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!pathRef.current) return;

      const rect = pathRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const visible = 1 - rect.top / windowHeight;
      const clamped = Math.max(0, Math.min(1, visible));

      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getPoint = () => {
    if (!pathRef.current) return { x: 100, y: 0 };

    const length = pathRef.current.getTotalLength();
    return pathRef.current.getPointAtLength(length * progress);
  };

  const { x, y } = getPoint();

  return (
    <div className={styles.heartLineWrapper}>
      <svg viewBox="0 0 200 320" className={styles.heartSvg}>
        {/* Пунктирная линия */}
        <path
          ref={pathRef}
          d="M100 10 
             C70 90, 130 150, 100 210
             C70 260, 130 300, 100 310"
          stroke="#bbb"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 8"
        />

        {/* Сердце */}
        <g transform={`translate(${x - 21}, ${y - 21}) scale(1.4)`}>
          <path
            d="M15 27 
               C5 18, 0 12, 0 7
               C0 2, 5 0, 9 3
               C12 5, 15 9, 15 9
               C15 9, 18 5, 21 3
               C25 0, 30 2, 30 7
               C30 12, 25 18, 15 27Z"
            fill="black"
          />

          <text
            x="15"
            y="15"
            textAnchor="middle"
            alignmentBaseline="middle"
            fontSize="11"
            fill="white"
            fontWeight="bold"
          >
            {number}
          </text>
        </g>
      </svg>
    </div>
  );
};

export default HeartLine;
