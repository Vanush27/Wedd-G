/** @format */

import React from "react";
import { motion } from "framer-motion";

import carSolo from "@assets/images/car-solo.png";
import carCouple from "@assets/images/car-couple.png";

// smoother elegant path
const path = `M160 40
C 60 140, 260 180, 160 280
S 60 420, 160 520
S 260 660, 160 760`;

const steps = [
  { y: 100, time: "9:30", text: "Փեսայի տուն" },
  { y: 280, time: "11:00", text: "Հարսի տուն" },
  { y: 460, time: "13:20", text: "Եկեղեցի" },
  { y: 640, time: "16:30", text: "Ռեստորան" },
];

const ScheduleAnimated: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex justify-center bg-[#f5f0ea] py-16">
      <svg width="320" height="820" viewBox="0 0 320 820">
        <motion.path
          d={path}
          fill="none"
          stroke="#b22222"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2 }}
        />

        {steps.map((step, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <image
              href={i === 0 ? carSolo : carCouple}
              x={160}
              y={step.y - 45}
              width={100}
              height={100}
              transform="translate(-25,0)"
            />

            <text
              x={i % 2 === 0 ? 20 : 70}
              y={step.y}
              textAnchor={i % 2 === 0 ? "start" : "end"}
              fontSize="22"
              fill="#b22222"
              fontWeight="600"
            >
              {step.time}
            </text>

            <text
              x={i % 2 === 0 ? 20 : 110}
              y={step.y + 30}
              textAnchor={i % 2 === 0 ? "start" : "end"}
              fontSize="18"
              fill="#b22222"
            >
              {step.text}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  );
};

export default ScheduleAnimated;
