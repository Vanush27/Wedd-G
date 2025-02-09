import React from "react";

import {
  DAY_SUFFIXES,
  HOUR_SUFFIXES,
  MINUTE_SUFFIXES,
  TARGET_DATE,
} from "./timer-constants";
import "./timer.scss";
import { useTimer } from "../../hooks";

const pluralRules = new Intl.PluralRules("ru-RU");

const getSuffix = (n: number, dict: Record<Intl.LDMLPluralRule, string>) => {
  const rule = pluralRules.select(n);
  return dict[rule];
};

const Timer = () => {
  const { days, hours, minutes } = useTimer(TARGET_DATE);

  const data = [
    { value: days, suffix: getSuffix(days, DAY_SUFFIXES) },
    { value: hours, suffix: getSuffix(hours, HOUR_SUFFIXES) },
    { value: minutes, suffix: getSuffix(minutes, MINUTE_SUFFIXES) },
  ];

  return (
    <div>
      {data.map(({ value, suffix }) => (
        <div key={suffix}>
          <span style={{ fontSize: "40px" }}>{value}</span>
          <span style={{ fontSize: "40px" }}>{suffix}</span>
        </div>
      ))}
    </div>
  );
};

export const MemoizedTimer = React.memo(Timer);
