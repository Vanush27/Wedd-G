import React, { useRef, useEffect } from "react";
import envelope from "@assets/images/envelope.png";

const WaxSealSmooth: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const last = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 340;
    canvas.height = 420;

    // 🔴 Реалистичная печать

    const g = ctx.createRadialGradient(170, 170, 5, 170, 170, 45);

    g.addColorStop(0, "#f6efe6");
    g.addColorStop(0.6, "#eadfce");
    g.addColorStop(1, "#d6c7b2");

    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(170, 170, 40, 0, Math.PI * 2);
    ctx.fill();

    // инициалы
    ctx.fillStyle = "black";
    ctx.font = "bold 20px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("T1 & T2", 170, 170);

    // режим стирания
    ctx.globalCompositeOperation = "destination-out";

    // плавная кисть
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 40;
  }, []);

  const getXY = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();

    const x = ("touches" in e ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = ("touches" in e ? e.touches[0].clientY : e.clientY) - rect.top;

    return { x, y };
  };

  const start = (e: any) => {
    drawing.current = true;
    last.current = getXY(e);
  };

  const move = (e: any) => {
    if (!drawing.current) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const { x, y } = getXY(e);

    ctx.beginPath();
    ctx.moveTo(last.current.x, last.current.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    last.current = { x, y };
  };

  const stop = () => {
    drawing.current = false;
  };

  return (
    <div style={{ position: "relative", width: 340 }}>
      {/* 💌 Конверт */}
      <img
        src={envelope}
        alt="envelope"
        style={{ width: "100%", display: "block" }}
      />

      {/* 🔴 Печать */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          touchAction: "none",
        }}
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={stop}
        onMouseLeave={stop}
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={stop}
      />
    </div>
  );
};

export default WaxSealSmooth;
