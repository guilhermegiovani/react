// import { useState } from "react"
import Button from "../../components/Button/Button"
import TodoInput from "../../components/TodoInput/TodoInput"
import TodoList from "../../components/TodoList/TodoList"
import clsx from 'clsx'

function Home() {


    return (
        <section className={clsx(
            'min-h-screen flex items-center justify-center px-4'
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

                <TodoList />

                <nav className="flex justify-between items-center mt-0">
                    <div className={clsx(
                        "inline-flex overflow-hidden rounded-lg",
                        "bg-[#1c1d22] border border-[#26272c]"
                    )}>

                        <Button
                            text="Todos"
                            className={clsx(
                                "px-3 py-1.5 text-lg font-normal text-[#9ca3af]",
                                "hover:bg-[#222327] hover:text-white transition cursor-pointer"
                            )}
                        />

                        <Button
                            text="Pendentes"
                            className={clsx(
                                "px-3 py-1.5 text-lg font-normal text-[#9ca3af]",
                                "hover:bg-[#222327] hover:text-white transition cursor-pointer"
                            )}
                        />

                        <Button
                            text="Concluídas"
                            className={clsx(
                                "px-3 py-1.5 text-lg font-normal text-[#9ca3af]",
                                "hover:bg-[#222327] hover:text-white transition cursor-pointer"
                            )}
                        />
                    </div>

                    <div>
                        <Button
                            text="Limpar Concluídas"
                            className={clsx(
                                "px-3 py-2 text-lg transition",
                                "rounded-lg",
                                "bg-[#1c1d22] border border-[#26272c]",
                                "text-[#9ca3af]",
                                "hover:bg-[#222327] hover:text-white transition cursor-pointer"
                            )}
                        />
                    </div>
                </nav>
            </div>

        </section>
    )
}

export default Home