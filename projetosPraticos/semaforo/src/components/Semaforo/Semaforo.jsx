import { useState } from "react"
import Button from "../Button/Button"
import styles from "./Semaforo.module.css"

function Semaforo() {

    const colors = ['red', 'yellow', 'green']
    const [currentColor, setCurrentColor] = useState("red")

    const nextColor = () => {
        const index = colors.indexOf(currentColor)
        const nextIndex = (index + 1) % colors.length
        setCurrentColor(colors[nextIndex])
    }

    return (
        <div className={styles.container}>
            <div className={styles.semaforo}>
                <div className={`${styles.luz} ${currentColor === 'red' ? `${styles.red}` : ''}`}></div>
                <div className={`${styles.luz} ${currentColor === 'yellow' ? `${styles.yellow}` : ''}`}></div>
                <div className={`${styles.luz} ${currentColor === 'green' ? `${styles.green}` : ''}`}></div>
            </div>

            <div className={styles.button}>
                <Button text="Trocar cor" handleClick={nextColor}/>
                <Button text="Automático" />
            </div>
        </div>
    )
}

export default Semaforo