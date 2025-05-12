import { useEffect, useState } from "react"
import Button from "../Button/Button"
import styles from "./Semaforo.module.css"

function Semaforo() {

    const colors = ['red', 'yellow', 'green']
    const [currentColor, setCurrentColor] = useState("red")
    const [automaticMode, setAutomaticMode] = useState(false)

    //mudar cor manual
    const nextColor = () => {
        const index = colors.indexOf(currentColor)
        const nextIndex = (index + 1) % colors.length
        setCurrentColor(colors[nextIndex])
    }

    // Mudar cor automático
    useEffect(() => {
        if(!automaticMode) return

        const interval = setInterval(() => {
            nextColor()
        }, 1000)

        return () => clearInterval(interval)

    }, [automaticMode, currentColor])

    return (
        <div className={styles.container}>
            <div className={styles.semaforo}>
                <div className={`${styles.luz} ${currentColor === 'red' ? `${styles.red}` : ''}`}></div>
                <div className={`${styles.luz} ${currentColor === 'yellow' ? `${styles.yellow}` : ''}`}></div>
                <div className={`${styles.luz} ${currentColor === 'green' ? `${styles.green}` : ''}`}></div>
            </div>

            <div className={styles.button}>
                <Button text="Trocar cor" handleClick={nextColor}/>
                <Button text={!automaticMode ? "Iniciar Automático" : "Parar Automático"} handleClick={() => setAutomaticMode(!automaticMode)} />
            </div>
        </div>
    )
}

export default Semaforo