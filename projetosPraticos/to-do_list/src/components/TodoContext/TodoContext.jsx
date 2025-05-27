import { createContext, useContext, useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid';

export const TodoContext = createContext()

export function TodoProvider({ children }) {

    const storedTasks = () => {
        const item = localStorage.getItem('tasks')
        try {
            return item ? JSON.parse(item) : []
        } catch (e) {
            console.error(`Erro ao fazer parse do localStorage ${e}`)
        }
    }

    const [tasks, setTasks] = useState(storedTasks)

    useEffect(() => {
        const item = JSON.stringify(tasks)
        localStorage.setItem('tasks', item)
    }, [tasks])

    function addTask(taskText) {
        const newTask = { id: uuidv4(), text: taskText, completed: false, isEditing: false }

        setTasks(prev => [...prev, newTask])
    }

    const handleDelete = (id) => {
        const newArray = tasks.filter((task) => task.id !== id)
        setTasks(newArray)
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

    // const [textEdited, setTextEdited] = useState()

    const editTask = (id, isEditing) => {

        // const taskEditing = tasks.map((task) =>
        //     task.id === id ? {
        //         ...task,
        //         isEditing,
        //         originalText: isEditing && task.originalText === undefined ? task.text : task.originalText
        //     } : task)

        const taskEditing = tasks.map((task) => {

            if (task.id === id) {
                return {
                    ...task,
                    isEditing,
                    originalText: isEditing && task.originalText === undefined ? task.text : task.originalText
                };
            }
            return task
        })

        setTasks(taskEditing)
    }

    const handleChangeText = (id, textEdit) => {
        const changeText = tasks.map((task) =>
            task.id === id ? { ...task, text: textEdit } : task)
        setTasks(changeText)
    }

    const cancelEdit = (id) => {
        const cancelEditText = tasks.map((task) =>
            task.id === id ? {
                ...task,
                text: task.originalText,
                isEditing: false,
                originalText: undefined
            } : task)

        setTasks(cancelEditText)
    }

    return (
        <TodoContext.Provider value={{ tasks, addTask, handleDelete, toggleCompleted, clearTaskCompleted, editTask, handleChangeText, cancelEdit }}>
            {children}
        </TodoContext.Provider>
    )
}

export function useTodo() {
    return useContext(TodoContext)
}