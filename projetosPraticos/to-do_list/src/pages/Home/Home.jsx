import TodoInput from "../../components/TodoInput/TodoInput"
import clsx from 'clsx'

function Home() {

    return (
        <section>
            <h1>To do List</h1>
            <TodoInput type="text" placeholder="Adicione uma tarefa..." />
        </section>
    )
}

export default Home