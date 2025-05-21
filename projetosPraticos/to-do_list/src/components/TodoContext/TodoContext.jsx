import { createContext, useContext, useState } from "react"

export const TodoContext = createContext()

export function TodoProvider({ children }) {

    const [tasks, setTasks] = useState([])

    function addTask(taskText) {
        const newTask = { id: Date.now(), text: taskText, completed: false }

        setTasks(prev => [...prev, newTask])
    }

    const handleDelete = (id) => {
        const newArray = tasks.filter((task) => task.id !== id)
        setTasks(newArray)
        console.log("Deletado")
    }

    const toggleCompleted = (id) => {
        const exchangeCompleted =
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task)
        setTasks(exchangeCompleted)
    }

    const clearTaskCompleted = () => {
        const tasksCompleted = tasks.filter((task) => task.completed !== true)
        setTasks(tasksCompleted)
    }

    return (
        <TodoContext.Provider value={{ tasks, addTask, handleDelete, toggleCompleted, clearTaskCompleted }}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodo() {
    return useContext(TodoContext)
}