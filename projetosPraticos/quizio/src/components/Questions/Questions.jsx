import AlternativeButton from "../AlternativeButton/AlternativeButton"
import Result from "../Result/Result"
import Background from "../Background/Background"
import Button from "../Button/Button"
import styles from "./Questions.module.css"
import questions from "../../db.json"
import { useEffect, useState } from "react"
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

    const nextQuestion = (selected) => {
        const isCorrect = selected === question.resposta
        const newPontuation = isCorrect ? pontuation + 1 : pontuation

        if (currentQuestionIndex >= (questions.length - 1)) {
            navigate("/result", { state: { newPontuation } })
        } else {
            if (isCorrect) setPontuation(newPontuation)
            setCurrentQuestionIndex(prev => prev + 1)
        setAlternative('')
        }
    }

    const [alternative, setAlternative] = useState()
    const [correctOrIncorrect, setCorrectOrIncorrect] = useState()

    useEffect(() => {
        if (alternative) {
            setCorrectOrIncorrect(alternative === question.resposta ? styles.correct : styles.incorrect)
        }
    }, [alternative, question.resposta])


    // const responseCorrect = (selected) => {
    //     if(selected === question.resposta) {
    //         setPontuation(prev => prev + 1)
    //     }
    // }

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
                                    // responseCorrect(opcao)
                                    // nextQuestion(opcao)
                                    setAlternative(opcao)
                                }}
                                key={i}
                                alternative={opcao}
                                className={`${styles.alternatives} ${colorsAlternatives[i]} ${alternative === opcao ? correctOrIncorrect : ''}`}
                            />
                        ))
                    }
                </div>
            </div>

            {alternative !== '' && alternative !== undefined
                ? <Button
                    text={currentQuestionIndex >= (questions.length - 1) ? "Finalizar" : "Proxíma"}
                    handleClick={() => {
                        // responseCorrect(opcao)
                        nextQuestion(alternative)
                    }}
                /> : ''
            }

        </section>
    )
}

export default Questions