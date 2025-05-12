import Button from "../Button/Button"
import styles from "./Result.module.css"

function Result() {

    return (
        <section className={styles.container}>
            <div>
                <h3>Você pontuou</h3>
                <p><span>3</span> de <span>5</span></p>
            </div>

            <Button text="Recomeçar" />
        </section>
    )
}

export default Result