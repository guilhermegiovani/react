import AlternativeButton from "../AlternativeButton/AlternativeButton"
import Result from "../Result/Result"
import Background from "../Background/Background"
import Button from "../Button/Button"
import styles from "./Questions.module.css"
import questions from "../../db.json"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Questions() {

    const colorsAlternatives = [
        styles.alternative1,
        styles.alternative2,
        styles.alternative3,
        styles.alternative4
    ]

    const navigate = useNavigate()

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [pontuation, setPontuation] = useState(0)
    const question = questions[currentQuestionIndex]

    const nextQuestion = () => {
        currentQuestionIndex >= (questions.length - 1) ? navigate("/result") : setCurrentQuestionIndex(currentQuestionIndex + 1)

        if (currentQuestionIndex >= (questions.length - 1)) {
            navigate("/result")
        } else {
            responseCorrect()
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    const responseCorrect = (selected) => {
        if(selected === question.resposta) {
            setPontuation(pontuation + 1)
        }
    }

    return (
        <section className={styles.container}>
            <Background tema="quiz" />
            <div className={styles.question}>
                <h3>{question.pergunta}</h3>
                <div>
                    {
                        question.opcoes.map((opcao, i) => (
                            <AlternativeButton
                            handleClick={() => {
                                responseCorrect(opcao)
                                nextQuestion()
                            }}
                            key={i}
                            alternative={opcao}
                            className={`${styles.alternatives} ${colorsAlternatives[i]}`} />
                        ))
                    }
                </div>
            </div>

            <Button text="Próxima" />

        </section>
    )
}

export default Questions