import clsx from 'clsx'
import Button from '../Button/Button'

function TodoList() {

    const tasks = ["Complete the Project", "Tarefa 2", "Tarefa 3", "Tarefa 4"]

    return (
        <section className={clsx(
            "bg-[#1c1d22]",
            "rounded-lg",
            "px-0",
            "w-full max-w-xl mx-auto",
            "border border-[#2c2d32]"
        )}
        >
            <div className="flex flex-col divide-y divide-[#2f3035]">
                {tasks.map((task, index) => (
                    <div
                        key={index}
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
                            <span>{task}</span>
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