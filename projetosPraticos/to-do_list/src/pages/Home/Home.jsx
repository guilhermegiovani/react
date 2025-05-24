// import { useState } from "react"
import { useState } from "react"
import Button from "../../components/Button/Button"
import TodoInput from "../../components/TodoInput/TodoInput"
import TodoList from "../../components/TodoList/TodoList"
import { useTodo } from "../../components/TodoContext/TodoContext"
import clsx from 'clsx'

function Home() {

    const [displayTasks, setDisplayTasks] = useState("Todos")
    const { clearTaskCompleted } = useTodo()

    const getButtonClasses = (filter) => {
        return clsx(
            "px-3 py-2 text-base font-normal md:text-lg transition-all duration-300 cursor-pointer",
            "flex justify-center",
            "w-full sm:w-auto",
            "rounded-lg", // flex-shrink-0 whitespace-nowrap
            displayTasks === filter
                ? "bg-[#222327] text-white ring-1 ring-blue-500" // ring-1 ring-blue-500
                : "text-[#9ca3af] hover:bg-[#222327] hover:text-white"
        );
    };



    return (
        <section className={clsx(
            'min-h-screen flex items-center justify-center px-4 py-10'
        )}>
            <div className={clsx(
                'w-full max-w-xl',
                'bg-[#16171b]', // bg-[#141519]
                'rounded-2xl',
                'p-8 md:p-10',
                'flex flex-col gap-6'
            )}>
                <h1 className={clsx(
                    'text-3xl md:text-4xl font-semibold text-center',
                    'text-white tracking-tight'
                )}>To-Do List</h1>

                <TodoInput
                    type="text"
                    placeholder="Adicione uma tarefa..."
                />

                <TodoList displayTasks={displayTasks} />

                <nav className="flex flex-col sm:flex-row sm:justify-between sm:items-center md:flex-row md:justify-between md:items-center gap-4">
                    <div className={clsx(
                        "flex justify-center",
                        "rounded-lg", // overflow-hidden
                        "bg-[#1c1d22] border border-[#26272c]"
                    )}>

                        <Button
                            text="Todos"
                            className={getButtonClasses("Todos")}
                            handleClick={() => {
                                setDisplayTasks("Todos")
                            }}
                        />

                        <Button
                            text="Pendentes"
                            className={getButtonClasses("Pendentes")}
                            handleClick={() => {
                                setDisplayTasks("Pendentes")
                            }}
                        />

                        <Button
                            text="Concluídas"
                            className={getButtonClasses("Concluidas")}
                            handleClick={() => {
                                setDisplayTasks("Concluidas")
                            }}
                        />
                    </div>

                    <div>
                        <Button
                            text="Limpar Concluídas"
                            className={clsx(
                                "w-full md:w-auto",
                                "whitespace-nowrap",
                                "px-3 py-2 text-base md:text-lg transition",
                                "rounded-lg",
                                "bg-[#1c1d22] border border-[#26272c]",
                                "text-[#9ca3af]",
                                "hover:bg-[#222327] hover:text-white transition cursor-pointer"
                            )}
                            handleClick={clearTaskCompleted}
                        />
                    </div>
                </nav>
            </div>

        </section>
    )
}

export default Home