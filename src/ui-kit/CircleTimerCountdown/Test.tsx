import { CountdownCircleTimer } from "react-countdown-circle-timer";

const getTimeDays = (time: number) => {
  return Math.floor(time / (1000 * 60 * 60 * 24));
};

const renderTime = (label: string, value: number) => (
  <div style={{ textAlign: "center", fontSize: "14px", fontWeight: "bold" }}>
    <span>{value}</span>
    <br />
    {label}
  </div>
);

const CountdownImageTimer = ({
  daysDuration,
  remainingTime,
  imageUrl,
}: any) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        width: "120px",
        height: "120px",
      }}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt="Countdown Background"
        style={{
          position: "absolute",
          width: "120px",
          height: "120px",
          objectFit: "cover",
          borderRadius: "50%", // Optional: Makes it circular
        }}
      />

      {/* Countdown Timer */}
      <CountdownCircleTimer
        isPlaying
        duration={daysDuration}
        size={80}
        strokeWidth={8}
        initialRemainingTime={remainingTime}
        colors="#e60003"
      >
        {({ elapsedTime, color }) => (
          <span style={{ color, position: "relative", zIndex: 2 }}>
            {renderTime("օր", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default CountdownImageTimer;
