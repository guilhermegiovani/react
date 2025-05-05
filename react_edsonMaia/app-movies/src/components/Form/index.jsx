import { useState } from "react"
import { categories } from "../Category"
import styles from "./Form.module.css"

function Form() {

    const [ url, setUrl ] = useState('')
    const [ category, setCategory ] = useState('')

    function onSave(e) {
        e.preventDefault()
        console.log(url, category)
    }

    return (
        <section className={styles.container}>
            <h2>Cadastro de vídeo</h2>
            <form onSubmit={onSave}>
                <div>
                    <label>URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required={true}
                        value={url}
                        onChange={ e => setUrl(e.target.value) }
                    />
                </div>

                <div>
                    <label>Categoria</label>
                    <select
                        required={true}
                        value={category}
                        onChange={ e => setCategory(e.target.value) }
                    >
                        <option value="-">Selecione uma categoria</option>
                        { categories.map(item => {
                            return <option value={item}>{item}</option>
                        }) }
                    </select>
                </div>

                <div>
                    <button>Cadastrar</button>
                </div>
            </form>
        </section>
    )

}

export default Form