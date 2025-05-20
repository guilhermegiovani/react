import { createContext, useContext, useState } from "react"


export const TodoContext = createContext()

export function TodoProvider({ children }) {

    const [tasks, setTasks] = useState([])

    function addTask(taskText) {
        const newTask = { id: Date.now(), text: taskText, completed: false }

        setTasks(prev => [...prev, newTask])
    }

    return (
        <TodoContext.Provider value={{ tasks, addTask }}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodo() {
    return useContext(TodoContext)
}