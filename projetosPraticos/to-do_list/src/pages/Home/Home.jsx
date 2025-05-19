import TodoInput from "../../components/TodoInput/TodoInput"
import clsx from 'clsx'

function Home() {

    return (
        <section>
            <div>
                <h1>To-do List</h1>
                <TodoInput type="text" placeholder="Adicione uma tarefa..." />
            </div>
        </section>
    )
}

export default Home