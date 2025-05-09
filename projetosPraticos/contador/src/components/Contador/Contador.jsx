import { useState } from "react"
import Button from "../Button/Button"
import styles from "./Contador.module.css"
import Message from "../Message/Message"

function Contador() {

    const [count, setCount] = useState(0)
    const max = 5
    const min = -5

    let colorText = 
        count > 0 ? styles.positive :
        count < 0 ? styles.negative :
        styles.neutro

    // if(count > 0) {
    //     colorText = styles.positive
    // } else if(count < 0) {
    //     colorText = styles.negative
    // }

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
                count === max ? <Message text="Limite Máximo atingido! Resete ou Diminua o contador!" /> : ''
            }

            {
                count === min ? <Message text="Limite Minimo atingido! Resete ou Aumente o contador!" /> : ''
            }

            <h1 className={colorText}>{count}</h1>
            {/* style={{ color: count > 0 ? 'green' : count < 0 ? 'red' : 'black' }} */}

            <div>
                <Button text="Aumentar" onHandle={increaseCounter} />
                <Button text="Resetar" onHandle={reset} />
                <Button text="Diminuir" onHandle={decreaseCounter} />
            </div>
        </div>
    )
}

export default Contador