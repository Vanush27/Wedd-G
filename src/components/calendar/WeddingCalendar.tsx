/** @format */

import cn from "classnames";

import styles from "./weddingCal.module.css";

const WEEKDAYS_MON_FIRST = [
  "Երկուշաբթի",
  "Երեքշաբթի",
  "Չորեքշաբթի",
  "Հինգշաբթի",
  "Ուրբաթ",
  "Շաբաթ",
  "Կիրակի",
];

const MONTH_NAMES_HY: Record<number, string> = {
  0: "Հունվար",
  1: "Փետրվար",
  2: "Մարտ",
  3: "Ապրիլ",
  4: "Մայիս",
  5: "Հունիս",
  6: "Հուլիս",
  7: "Օգոստոս",
  8: "Սեպտեմբեր",
  9: "Հոկտեմբեր",
  10: "Նոյեմբեր",
  11: "Դեկտեմբեր",
};

function lastDayOfMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

/** Երեք հաջորդական օր՝ կենտրոնում `highlightDay` (եթե հնարավոր է ամսաթվի սահմաններում) */
function threeDayWindow(
  year: number,
  month: number,
  highlight: number
): [number, number, number] {
  const last = lastDayOfMonth(year, month);
  const h = Math.min(Math.max(highlight, 1), last);
  let start = h - 1;
  if (start < 1) start = 1;
  if (start + 2 > last) start = last - 2;
  return [start, start + 1, start + 2];
}

function weekdayLabelMonFirst(
  year: number,
  month: number,
  day: number
): string {
  const col = (new Date(year, month, day).getDay() + 6) % 7;
  return WEEKDAYS_MON_FIRST[col];
}

export interface WeddingCalendarProps {
  year?: number;
  month?: number;
  highlightDay?: number;
}

const WeddingCalendar = ({
  year = 2026,
  month = 5,
  highlightDay = 21,
}: WeddingCalendarProps) => {
  const [d0, d1, d2] = threeDayWindow(year, month, highlightDay);
  const days = [d0, d1, d2];
  const monthTitle = MONTH_NAMES_HY[month] ?? "Հունիս";

  return (
    <section
      className={styles.screen}
      aria-label={`${monthTitle} ${highlightDay}`}
    >
      <h2 className={styles.monthTitle}>{monthTitle}</h2>

      <div className={styles.grid}>
        <div className={styles.weekdayRow}>
          {days.map((day) => (
            <div
              key={`w-${day}`}
              className={cn(
                styles.weekdayCell,
                day === highlightDay && styles.weekdayAccent
              )}
            >
              {weekdayLabelMonFirst(year, month, day)}
            </div>
          ))}
        </div>

        <div className={styles.dateRow}>
          {days.map((day) => (
            <div key={`d-${day}`} className={styles.dateCell}>
              <span
                className={cn(
                  styles.dateNum,
                  day === highlightDay && styles.dateNumAccent
                )}
              >
                {day}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.flourish} aria-hidden>
        <svg
          viewBox="0 0 320 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 38C52 12 108 4 160 18c58 16 112-6 152 22"
            stroke="#9c1f2e"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M168 8c-12 18-8 32 6 34 14 2 24-10 18-24"
            stroke="#9c1f2e"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </section>
  );
};

export default WeddingCalendar;
