"use client";

import Image from "next/image";
import style from "./styles/homepage.module.css";

function HomePage(){
  return(
    <>
      <div className={style.container}>
        <p className={style.heading}>Smash Abhinav</p>
        <Play/>
      </div>
    </>
  )
}

function Play(){
  return(
      <button onclick={()=>route} className={style.playBtn}>Play</button>
  )
}


export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  )
}
