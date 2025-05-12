import Button from "../Button/Button"
import styles from "./Questions.module.css"

function Questions() {

    return (
        <section className={styles.container}>
            <div className={styles.question}>
                <h3>Qual é a capital da França?</h3>
                <div>
                    <p>testando</p>
                    <p>teste</p>
                    <p>Paris</p>
                    <p>Nice</p>
                </div>
            </div>

            <Button text="Próxima" />
        </section>
    )
}

export default Questions