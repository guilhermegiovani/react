import TodoInput from "../../components/TodoInput/TodoInput"

function Home() {

    return (
        <div>
            <h1>To do List</h1>
            <TodoInput type="text" placeholder="Adicione uma tarefa..." />
        </div>
    )
}

export default Home