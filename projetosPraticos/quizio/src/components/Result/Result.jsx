import Background from "../Background/Background"
import Button from "../Button/Button"
import styles from "./Result.module.css"
import { useNavigate, useLocation } from "react-router-dom"

function Result() {

    const navigate = useNavigate()
    const location = useLocation()
    const pontuation = location.state?.newPontuation

    const startOver = () => {
        navigate("/questions")
    }

    return (
        <section className={styles.container}>
            <Background tema="result" />
            <div className={styles.results}>
                <h3>Você pontuou</h3>
                <p><span>{pontuation ?? 0}</span> de <span>10</span></p>
            </div>

            <div className={styles.btn}>
                <Button text="Recomeçar" handleClick={startOver} />
            </div>
        </section>
    )
}

export default Result