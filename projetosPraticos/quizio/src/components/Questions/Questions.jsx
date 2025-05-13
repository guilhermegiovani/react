import Background from "../Background/Background"
import Button from "../Button/Button"
import styles from "./Questions.module.css"

function Questions() {

    return (
        <section className={styles.container}>
            <Background tema="quiz" />
            <div className={styles.question}>
                <h3>Qual é a capital da França?</h3>
                <div>
                    <p className={styles.alternative1}>testando</p>
                    <p className={styles.alternative2}>teste</p>
                    <p className={styles.alternative3}>Paris</p>
                    <p className={styles.alternative4}>Nice</p>
                </div>
            </div>

            <Button text="Próxima" />
        </section>
    )
}

export default Questions