import Button from "../Button/Button"
import Result from "../Result/Result"
import styles from "./Home.module.css"

function Home() {

    return (
        <section className={styles.container}>
            <h1>Quizio</h1>
            <Button text="Começar Quiz" handleClick={<Result />} />
        </section>
    )
}

export default Home