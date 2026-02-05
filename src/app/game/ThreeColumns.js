"use client";

import { useEffect, useState } from "react";
import styles from "../styles/gamepage.module.css";

const IMAGES = ["/boy2.png"];

function FallingItem({ column, speed, onHit, onMiss }) {
  const [top, setTop] = useState(-100);

  useEffect(() => {
    let animationId;

    const fall = () => {
      setTop((prev) => {
        if (prev > window.innerHeight) {
          onMiss();          // 🔴 MISS
          return prev;
        }
        return prev + speed;
      });
      animationId = requestAnimationFrame(fall);
    };

    animationId = requestAnimationFrame(fall);
    return () => cancelAnimationFrame(animationId);
  }, [speed, onMiss]);

  return (
    <img
      src={IMAGES[0]}
      className={styles.falling}
      style={{
        left: `${column * 33.33}%`,
        top: `${top}px`,
      }}
      onClick={onHit}         // 🟢 HIT
      alt="falling"
    />
  );
}

export default function ThreeColumns({ onHit, onMiss }) {
  const [items, setItems] = useState([]);
  const [speed, setSpeed] = useState(1);

  useEffect(() => {
    const spawnInterval = setInterval(() => {
      setItems((prev) => [
        ...prev,
        {
          id: Date.now(),
          column: Math.floor(Math.random() * 3),
        },
      ]);
    }, 1200);

    const speedInterval = setInterval(() => {
      setSpeed((s) => s + 0.3);
    }, 3000);

    return () => {
      clearInterval(spawnInterval);
      clearInterval(speedInterval);
    };
  }, []);

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.threeColumns}>
      {/* Test buttons (optional) */}
      <button onClick={onHit}></button>
      <button onClick={onMiss}></button>

      {items.map((item) => (
        <FallingItem
          key={item.id}
          column={item.column}
          speed={speed}
          onHit={() => {
            onHit();
            removeItem(item.id);
          }}
          onMiss={() => {
            onMiss();
            removeItem(item.id);
          }}
        />
      ))}
    </div>
  );
}
