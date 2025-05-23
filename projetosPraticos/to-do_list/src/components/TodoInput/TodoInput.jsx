// import Button from "../Button/Button"
// import clsx from 'clsx'
// import { useState } from "react"
// import { TodoContext, useTodo } from "../TodoContext/TodoContext"
// import { motion, AnimatePresence } from "framer-motion"

// function TodoInput({ type, id, placeholder }) {

//     const { addTask, tasks } = useTodo(TodoContext)
//     const [inputValue, setInputValue] = useState('')

//     const [messageError, setMessageError] = useState("")

//     const handleSubmit = () => {
//         if (inputValue.trim() !== '') {
//             const taskRepeat = tasks.some((task) => task.text.trim().toLowerCase() === inputValue.trim().toLocaleLowerCase())

//             if (taskRepeat) {
//                 setMessageError("Tarefa já existe!")
//                 setTimeout(() => {
//                     setMessageError("")
//                 }, 3000)
//                 return
//             }

//             addTask(inputValue.trim())
//             setInputValue('')
//         }

//     }

//     return (
//         <div className={"w-full flex flex-col gap-2"}>
//             <div className={clsx(
//                 "flex flex-col sm:flex-row items-stretch gap-4",
//                 "w-full"
//             )}>
//                 <input
//                     type={type}
//                     id={id}
//                     placeholder={placeholder}
//                     value={inputValue}
//                     onChange={(e) => setInputValue(e.target.value)}
//                     className={clsx(
//                         "flex-grow",
//                         "bg-[#1c1d22] text-white placeholder-neutral-400", // bg-neutral-800
//                         "rounded-lg px-4 py-3",
//                         "outline-none border border-transparent focus:border-blue-500",
//                         "transition duration-200",
//                         "text-base md:text-lg"
//                     )}
//                 />
//                 <Button
//                     text="Adicionar"
//                     handleClick={handleSubmit}
//                     className={clsx(
//                         "bg-[#3b5bdb] hover:bg-[#4c6ef5]",
//                         "text-white px-4 py-3",
//                         "rounded-lg",
//                         "transition duration-200",
//                         "cursor-pointer",
//                         "text-base md:text-lg",
//                         "w-full sm:w-auto"
//                     )}
//                 />
//             </div>

//             <AnimatePresence>
//                 {messageError && (
//                     <motion.span
//                         key="error"
//                         initial={{ opacity: 0, y: -8 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         exit={{ opacity: 0, y: -8 }}
//                         transition={{ duration: 0.3 }}
//                         role="alert"
//                         aria-live="assertive"
//                         className="text-red-500 text-sm md:text-base ml-1 mt-2 flex items-center gap-2"
//                     >
//                         <svg
//                             className="w-4 h-4 flex-shrink-0"
//                             fill="none"
//                             stroke="currentColor"
//                             strokeWidth="2"
//                             viewBox="0 0 24 24"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
//                             />
//                         </svg>
//                         {messageError}
//                     </motion.span>
//                 )}
//             </AnimatePresence>


//         </div>
//     )
// }

// export default TodoInput

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import clsx from "clsx"
import Button from "../Button/Button"
import { useTodo } from "../TodoContext/TodoContext"

function TodoInput({ type = "text", id = "todo", placeholder = "Adicione uma tarefa..." }) {
    const [inputValue, setInputValue] = useState("")
    const [messageError, setMessageError] = useState("")
    const { tasks, addTask } = useTodo()

    const handleSubmit = () => {
        if (inputValue.trim() === "") return

        const taskRepeat = tasks.some(
            (task) =>
                task.text.trim().toLowerCase() === inputValue.trim().toLowerCase()
        )

        if (taskRepeat) {
            setMessageError("Tarefa já existe!")
            setTimeout(() => setMessageError(""), 2000)
            return
        }

        addTask(inputValue.trim())
        setInputValue("")
    }

    return (
        <div className="w-full flex flex-col gap-2">
            <div className={clsx("flex flex-col sm:flex-row items-stretch gap-4 w-full")}>
                <input
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className={clsx(
                        "flex-grow",
                        "bg-[#1c1d22] text-white placeholder-neutral-400",
                        "rounded-lg px-4 py-3",
                        "outline-none border border-transparent focus:border-blue-500",
                        "transition duration-200",
                        "text-base md:text-lg"
                    )}
                />
                <Button
                    text="Adicionar"
                    handleClick={handleSubmit}
                    className={clsx(
                        "bg-[#3b5bdb] hover:bg-[#4c6ef5]",
                        "text-white px-4 py-3",
                        "rounded-lg",
                        "transition duration-200",
                        "cursor-pointer",
                        "text-base md:text-lg",
                        "w-full sm:w-auto"
                    )}
                />
            </div>

            <AnimatePresence>
                {messageError && (
                    <motion.span
                        key="error-message"
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.25 }}
                        className="text-red-500 text-sm px-1"
                    >
                        {messageError}
                    </motion.span>
                )}
            </AnimatePresence>
        </div>
    )
}

export default TodoInput
