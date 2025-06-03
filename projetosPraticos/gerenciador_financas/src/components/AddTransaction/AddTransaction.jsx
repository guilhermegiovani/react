import Input from "../Input/Input"
import Button from "../Button/Button"
import { clsx } from "clsx"
import { useTransaction } from "../TransactionContext/TransactionContext"
import { useState } from "react"

function AddTransaction() {

    const { addTransaction } = useTransaction()

    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("")

    const handleSubmit = () => {
        // console.log("description:", description)
        // console.log("value:", value)
        // console.log("type:", type)

        if (description.trim() === "") return
        if (value === "") return
        if (type === "") return

        addTransaction(description.trim(), value, type)
        setDescription("")
        setValue("")
        setType("")
    }

    return (
        <section
            className={clsx(
                "bg-white dark:bg-gray-800",
                "p-5",
                "rounded-xl",
                "shadow-lg",
                "w-full",
                "max-w-[350px] sm:max-w-lg",
                "mx-auto mb-5"
            )}
        >
            <h2 className={clsx(
                "text-xl font-semibold mb-2",
                "text-gray-800 dark:text-gray-100"
            )}>
                Adicionar Transação
            </h2>

            <form className={clsx("flex", "flex-col", "gap-4")}>
                <Input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={clsx(
                        "w-full",
                        "border",
                        "border-gray-300 dark:border-gray-600",
                        "p-2",
                        "rounded-md",
                        "bg-white dark:bg-gray-700",
                        "text-gray-800 dark:text-gray-100",
                        "placeholder-gray-400 dark:placeholder-gray-400"
                    )}
                />

                <div className={clsx("flex", "gap-4")}>
                    <Input
                        type="number"
                        placeholder="Valor em R$"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        step="0.01"
                        className={clsx(
                            "w-1/2",
                            "border",
                            "border-gray-300 dark:border-gray-600",
                            "p-2",
                            "rounded-md",
                            "text-gray-800 dark:text-gray-100",
                            "bg-white dark:bg-gray-700",
                            "placeholder-gray-400 dark:placeholder-gray-400"
                        )}
                    />

                    <select
                        className={clsx(
                            "w-1/2",
                            "border",
                            "border-gray-300 dark:border-gray-600",
                            "p-2",
                            "rounded-md",
                            "cursor-pointer",
                            "bg-white dark:bg-gray-700",
                            "text-gray-800 dark:text-gray-100"
                        )}
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option>Tipo</option>
                        <option value="Receita">Receita</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>

                <div className="flex justify-end">
                    <Button
                        text="Adicionar"
                        className={clsx(
                            "bg-red-600 text-white font-medium px-4 py-2 sm:px-6 rounded-md",
                            "hover:bg-red-500 dark:hover:bg-red-400",
                            "transition-colors duration-200 ease-in-out cursor-pointer"
                        )}
                        handleClick={(e) => {
                            e.preventDefault()
                            handleSubmit()
                        }}
                    />
                </div>
            </form>
        </section>
    )
}

export default AddTransaction