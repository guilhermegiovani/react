import Button from "../Button/Button"
import clsx from 'clsx'
import { useContext, useState } from "react"
import { TodoContext } from "../TodoContext/TodoContext"

function TodoInput({ type, id, placeholder }) {

    const { addTask } = useContext(TodoContext)
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = () => {
        if (inputValue.trim() !== '') {
            addTask(inputValue.trim())
            setInputValue('')
        }
    }

    return (
        <div className={clsx(
            "flex items-center gap-4",
            "w-full"
        )}>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className={clsx(
                    "flex-grow",
                    "bg-[#1c1d22] text-white placeholder-neutral-400", // bg-neutral-800
                    "rounded-lg px-4 py-3",
                    "outline-none border border-transparent focus:border-blue-500",
                    "transition duration-200",
                    "text-lg"
                )} />

            <Button
                text="Adicionar"
                handleClick={handleSubmit}
                className={clsx(
                    "bg-[#3b5bdb] hover:bg-[#4c6ef5]",
                    "text-white px-4 py-3",
                    "rounded-lg",
                    "transition duration-200",
                    "cursor-pointer",
                    "text-lg"
                )}
            />
        </div>
    )
}

export default TodoInput