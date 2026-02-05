import styles from "../styles/gamepage.module.css"

function ScoreBoard(){
    return(
        <div>ScoreBoard</div>
    )
}

function ThreeColumns(){
    return(
        <div>ThreeColumns</div>
    )
}

function SmashTheBoy(){
    return(
        <div className={styles.header}>Smash The Bday Boy !!</div>
    )
}

export default function GamePage(){
    return(
        <>
            <SmashTheBoy/>
            <ThreeColumns/>
            <ScoreBoard/>
        </>
    )
}