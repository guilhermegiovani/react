import Background from "../Background/Background"
import {useNavigate} from "react-router-dom"
import Button from "../Button/Button"
import Result from "../Result/Result"
import styles from "./Home.module.css"

function Home() {

    const navigate = useNavigate("/")

    const handleStart = () => {
        navigate("/questions")
    }

    return (
        <section className={styles.container}>
            <Background tema="start" />
            <h1>Quizio</h1>
            <Button text="Começar Quiz" handleClick={handleStart} />
        </section>
    )
}

export default Home