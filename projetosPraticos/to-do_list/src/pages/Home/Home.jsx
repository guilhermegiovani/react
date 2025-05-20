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

                <TodoInput type="text" placeholder="Adicione uma tarefa..." />

                <TodoList />
            </div>
        </section>
    )
}

export default Home