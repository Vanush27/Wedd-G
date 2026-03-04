import React, { useRef, useEffect } from "react";
import envelope from "@assets/images/envelope.png";

const WaxSealHeart: React.FC = () => {
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

    const centerX = 170;
    const centerY = 160;
    const size = 35;

    // ❤️ Красный реалистичный градиент
    const g = ctx.createRadialGradient(
      centerX - 10,
      centerY - 10,
      5,
      centerX,
      centerY,
      70
    );

    g.addColorStop(0, "#ff4d4d");
    g.addColorStop(0.5, "#c1121f");
    g.addColorStop(1, "#5a0000");

    ctx.fillStyle = g;

    ctx.shadowColor = "rgba(0,0,0,0.35)";
    ctx.shadowBlur = 12;

    // ❤️ Рисуем сердце
    ctx.beginPath();
    ctx.moveTo(centerX, centerY + size / 2);

    ctx.bezierCurveTo(
      centerX + size,
      centerY - size,
      centerX + size * 2,
      centerY + size,
      centerX,
      centerY + size * 2
    );

    ctx.bezierCurveTo(
      centerX - size * 2,
      centerY + size,
      centerX - size,
      centerY - size,
      centerX,
      centerY + size / 2
    );

    ctx.closePath();
    ctx.fill();
    ctx.shadowBlur = 0;

    // 🖤 Инициалы строго по центру
    ctx.fillStyle = "#2b0d0d";
    ctx.font = "bold 18px serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("T1 & T2", centerX, centerY + 15);

    // режим стирания
    ctx.globalCompositeOperation = "destination-out";
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = 45;
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
      <img
        src={envelope}
        alt="envelope"
        style={{ width: "100%", display: "block" }}
      />

      {/* 🔥 Надпись с анимацией */}
      <div
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          transform: "translateX(-50%)",
          fontFamily: "serif",
          fontSize: 16,
          color: "#5a0000",
          animation: "floatText 1.8s ease-in-out infinite",
        }}
      >
        Стирать тут
      </div>

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

      {/* CSS анимация */}
      <style>
        {`
          @keyframes floatText {
            0% { transform: translate(-50%, 0px); }
            50% { transform: translate(-50%, -8px); }
            100% { transform: translate(-50%, 0px); }
          }
        `}
      </style>
    </div>
  );
};

export default WaxSealHeart;
