import clsx from 'clsx'
import Button from '../Button/Button'
// import { useContext, useState } from 'react'
import { TodoContext, useTodo } from '../TodoContext/TodoContext'

function TodoList({ displayTasks }) {

    const { tasks, handleDelete, toggleCompleted } = useTodo()

    let filteredTasks = tasks

    if(displayTasks === "Pendentes") {
        filteredTasks = tasks.filter(task => !task.completed)
    } else if(displayTasks === "Concluidas") {
        filteredTasks = tasks.filter(task => task.completed)
    }

    return (
        <section className={clsx(
            "bg-[#1c1d22]",
            "rounded-lg",
            "px-0",
            "w-full max-w-xl mx-auto",
            "border border-[#26272c]" // [#2c2d32] [#2f3035]
        )}
        >
            <div className={clsx(
                "flex flex-col divide-y divide-[#26272c]",
                "max-h-64 md:max-h-80 overflow-y-auto pr-1",
                "scrollbar-thin scrollbar-thumb-[#3b5bdb] scrollbar-track-[#1c1d22]"
            )}>
                {filteredTasks.map((task) => (
                        <div
                            key={task.id}
                            className={clsx(
                                "flex justify-between items-center",
                                "text-white text-xl font-normal",
                                "px-4 py-3"
                            )}
                        >
                            <div className="flex items-center gap-3">
                                <input
                                    type="checkbox"
                                    className={clsx(
                                        "w-5 h-5 md:w-6 md:h-6",
                                        "appearance-none",
                                        "rounded-full",
                                        "border border-gray-600",
                                        "grid place-items-center",
                                        "leading-none",  // reduz espaçamento vertical
                                        "checked:border-gray-500",
                                        "checked:before:content-['✓']",
                                        "checked:before:text-gray-500",
                                        "checked:before:font-bold",
                                        "checked:before:text-[14px] md:checked:before:text-[16px]", // ajuste fino do tamanho
                                        "transition-all duration-150 cursor-pointer"
                                    )}
                                    checked={task.completed}
                                    onChange={() => {
                                        toggleCompleted(task.id)
                                    }}
                                />
                                <span>{task.text}</span>
                            </div>

                            <Button
                                text="Delete"
                                className="text-red-400 font-normal hover:text-red-300 transition cursor-pointer text-lg md:text-xl"
                                handleClick={() => {
                                    handleDelete(task.id)
                                }}
                            />

                        </div>
                    ))}
            </div>
        </section >
    )
}

export default TodoList