import { useState } from "react"
import Button from "../Button/Button"
import styles from "./Contador.module.css"
import Message from "../Message/Message"

function Contador() {

    const [count, setCount] = useState(0)
    const max = 5
    const min = -5

    const colorText = 
        count > 0 ? styles.positive  : ''
        count < 0 ? styles.negative  : ''
        styles.neutro

    const increaseCounter = () => {
        if (count >= max) {
            return
        } else {
            return setCount(count + 1)
        }
    }

    const decreaseCounter = () => {
        if (count <= min) {
            return
        } else {
            return setCount(count - 1)
        }
    }

    const reset = () => { return setCount(0) }

    return (
        <div className={styles.container}>
            {
                count === max ? <Message text="Limite Máximo atingido! Reseta ou Diminua o contador!" /> : ''
            }

            {
                count === min ? <Message text="Limite Minimo atingido! Reseta ou Aumente o contador!" /> : ''
            }

            <h1 className={colorText}>{count}</h1>

            <div>
                <Button text="Aumentar" onHandle={increaseCounter} />
                <Button text="Resetar" onHandle={reset} />
                <Button text="Diminuir" onHandle={decreaseCounter} />
            </div>
        </div>
    )
}

export default Contador