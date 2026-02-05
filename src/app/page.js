"use client";

import FloatingCirclesBackground from "./FloatingCirclesBackground";
import Image from "next/image";
import { useRouter } from "next/navigation";
import style from "./styles/homepage.module.css";

function HomePage(){
  return(
    <>
      <div className={style.container}>
        <FloatingCirclesBackground/>
        <p className={style.heading}>Smash Abhinav</p>
        <Play/>
        <Message/>
      </div>
    </>
  )
}

function Message(){
  return(
    <div className={style.message}>[Just Smash...Smash..and Smash..]</div>
  )
}

function Play(){
  const router=useRouter();
  return(
      <button onClick={()=>router.push("/game")} className={style.playBtn}>Play</button>
  )
}




export default function Home() {
  return (
    <>
      <HomePage/>
    </>
  )
}
