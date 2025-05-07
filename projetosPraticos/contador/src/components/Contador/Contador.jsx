import { useState } from "react"
import Button from "../Button/Button"
import styles from "./Contador.module.css"

function Contador() {

    const [ count, setCount ] = useState(0)

    const increaseCounter = () => { return setCount(count + 1) }
    const decreaseCounter = () => { return setCount(count - 1) }
    const reset = () => { return setCount(0) }

    return (
        <div className={styles.container}>
            <h1>{count}</h1>

            <div>
                <Button text="Aumentar" onHandle={increaseCounter} />
                <Button text="Resetar" onHandle={reset} />
                <Button text="Diminuir" onHandle={decreaseCounter} />
            </div>
        </div>
    )
}

export default Contador