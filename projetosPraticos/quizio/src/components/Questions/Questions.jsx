import AlternativeButton from "../AlternativeButton/AlternativeButton"
import Background from "../Background/Background"
import Button from "../Button/Button"
import styles from "./Questions.module.css"
// import questions from "../../db.json"
// import { useEffect, useState } from "react"

function Questions() {

    const colorsAlternatives = [
        styles.alternative1,
        styles.alternative2,
        styles.alternative3,
        styles.alternative4
    ]

    // const [alternatives, setAlternatives] = useState([])

    const alternatives = ["Marsélia","Lyon","Paris","Nice"]

    // useEffect(() => {

    //     const getAlternatives = () => {

    //         // const alternatives = []

    //         for(let i = 0; i < questions.length; i++) {
    //             setAlternatives(questions[i].opcoes)
    //         }
    //     }

    //     getAlternatives()
    // }, [])
    
    // console.log(alternatives)
    

    return (
        <section className={styles.container}>
            <Background tema="quiz" />
            <div className={styles.question}>
                <h3>Qual é a capital da França?</h3>
                <div>
                    {
                        alternatives.map((alt, i) => (
                            <AlternativeButton key={i} alternative={alt} className={`${styles.alternatives} ${colorsAlternatives[i]}`} />
                        ))
                    }
                </div>
            </div>

            <Button text="Próxima" />
            
        </section>
    )
}

export default Questions