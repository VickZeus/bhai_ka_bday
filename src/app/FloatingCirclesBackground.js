"use client";

import { useEffect, useRef } from "react";

export default function FloatingCirclesBackground() {
  const canvasRef = useRef(null);
  const circles = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize circles
    const numCircles = 20; // change as needed
    circles.current = Array.from({ length: numCircles }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 20 + 5, // 5-25 px
      dx: (Math.random() - 0.5) * 2, // horizontal speed
      dy: (Math.random() - 0.5) * 2, // vertical speed
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      circles.current.forEach((c) => {
        // Move
        c.x += c.dx;
        c.y += c.dy;

        // Bounce on edges
        if (c.x + c.radius > canvas.width || c.x - c.radius < 0) c.dx *= -1;
        if (c.y + c.radius > canvas.height || c.y - c.radius < 0) c.dy *= -1;

        // Draw
        ctx.beginPath();
        ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1, // behind all content
        background: "black", // or transparent
      }}
    />
  );
}
