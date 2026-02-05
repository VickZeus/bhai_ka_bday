"use client"
import styles from "../styles/gamepage.module.css";
import ThreeColumns from "./ThreeColumns";
import {useState} from "react"

function ScoreBoard({ score, hit, miss }) {
  return (
    <div className={styles.scoreboard}>
      <div className={styles.bigtext}>ScoreBoard</div>

      <div className={styles.colflex}>
        <div className={styles.rowflex}>
          <div>Score :</div>
          <div>{score}</div>
        </div>

        <div className={styles.rowflex}>
          <div>Hit :</div>
          <div>{hit}</div>
        </div>

        <div className={styles.rowflex}>
          <div>Miss :</div>
          <div>{miss}</div>
        </div>
      </div>
    </div>
  );
}



function SmashTheBoy(){
    return(
        <div className={styles.header}>Smash The Bday Boy !!</div>
    )
}

export default function GamePage() {
  const [score, setScore] = useState(0);
  const [hit, setHit] = useState(0);
  const [miss, setMiss] = useState(0);

  const handleHit = () => {
    setHit((h) => h + 1);
    setScore((s) => s + 10);
  };

  const handleMiss = () => {
    setMiss((m) => m + 1);
  };

  return (
    <>
      <SmashTheBoy />
      <ThreeColumns onHit={handleHit} onMiss={handleMiss} />
      <ScoreBoard score={score} hit={hit} miss={miss} />
    </>
  );
}
