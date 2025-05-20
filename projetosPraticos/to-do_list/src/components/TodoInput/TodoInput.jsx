import Button from "../Button/Button"
import clsx from 'clsx'

function TodoInput({ type, id, placeholder }) {

    return (
        <div className={clsx(
            "flex items-center gap-4",
            "w-full"
        )}>
            <input
                type={type}
                id={id}
                placeholder={placeholder}
                className={clsx(
                    "flex-grow",
                    "bg-[#1c1d22] text-white placeholder-neutral-400", // bg-neutral-800
                    "rounded-md px-4 py-3",
                    "outline-none border border-transparent focus:border-blue-500",
                    "transition duration-200"
                )} />

            <Button text="Adicionar" className={clsx(
                "bg-blue-600 hover:bg-blue-700",
                "text-white px-6 py-3",
                "rounded-md",
                "transition duration-200",
                "cursor-pointer",
                "text-base"
            )} />
        </div>
    )
}

export default TodoInput