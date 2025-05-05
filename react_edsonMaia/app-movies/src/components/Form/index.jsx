import styles from "./Form.module.css"

function Form() {

    return (
        <section className={StyleSheet.container}>
            <h2>Cadastro de vídeo</h2>
            <form>
                <div>
                    <label htmlFor="">URL do vídeo</label>
                    <input
                        type="text"
                        placeholder="Digite a URL do vídeo"
                        required={true}
                    />
                </div>

                <div>
                    <label htmlFor="">Categoria</label>
                    <select name="" id="">
                        <option value="-">Selecione uma categoria</option>
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