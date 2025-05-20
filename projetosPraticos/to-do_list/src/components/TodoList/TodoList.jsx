import clsx from 'clsx'
import Button from '../Button/Button'
import { useContext } from 'react'
import { TodoContext } from '../TodoContext/TodoContext'

function TodoList() {

    const { tasks } = useContext(TodoContext)

    return (
        <section className={clsx(
            "bg-[#1c1d22]",
            "rounded-lg",
            "px-0",
            "w-full max-w-xl mx-auto",
            "border border-[#26272c]" // [#2c2d32] [#2f3035]
        )}
        >
            <div className="flex flex-col divide-y divide-[#26272c]">
                {tasks.map((task) => (
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
                                    "w-6 h-6",
                                    "appearance-none",
                                    "rounded-full",
                                    "border border-gray-600",
                                    "grid place-items-center",
                                    "leading-none",                          // reduz espaçamento vertical
                                    "checked:border-gray-500",
                                    "checked:before:content-['✓']",
                                    "checked:before:text-gray-500",
                                    "checked:before:font-bold",
                                    "checked:before:text-[16px]",            // ajuste fino do tamanho
                                    "transition-all duration-150 cursor-pointer"
                                )}
                            />
                            <span>{task.text}</span>
                        </div>

                        <Button
                            text="Delete"
                            className="text-red-400 font-normal hover:text-red-300 transition cursor-pointer text-xl"
                        />

                    </div>
                ))}
            </div>
        </section >
    )
}

export default TodoList