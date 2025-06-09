import Input from "../Input/Input"
import Button from "../Button/Button"
import { clsx } from "clsx"
import { useTransaction } from "../TransactionContext/TransactionContext"
import { useState } from "react"

function AddTransaction({ value, setValue, description, setDescription, type, setType, isEditingOpen, setIsEditingOpen }) {

    const { addTransaction, transactions, editingTransaction, isActive, setIsActive, cancelEdit, sucessMessage, setSucessMessage } = useTransaction()

    const messageError = "ERROR! Um dos campos está vazio ou valor negativo!"
    const [sucessMessageEdit, setSucessMessageEdit] = useState("")

    const handleSubmit = () => {

        if (description.trim() === "") return setIsActive(true)
        if (value === "" || value < 0) return setIsActive(true)
        if (type === "") return setIsActive(true)

        addTransaction(description.trim(), value, type)
    }

    const resetForm = () => {
        setDescription("")
        setValue("")
        setType("")
        setIsEditingOpen(false)
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
            {isActive &&
                <p className={clsx(
                    "flex justify-center mb-2",
                    "text-[14px] font-semibold text-red-500"
                )}>{messageError}</p>
            }

            {sucessMessage &&
                <p className={clsx(
                    "flex justify-center mb-2",
                    "font-semibold text-green-500"
                )}>{sucessMessageEdit}</p>
            }

            <h2 className={clsx(
                "text-xl font-semibold mb-2",
                "text-gray-800 dark:text-gray-100"
            )}>
                Adicionar Transação
            </h2>

            <form
                className={clsx("flex", "flex-col", "gap-4")}
            >
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
                        <option className="text-gray-800 dark:text-gray-100">Tipo</option>
                        <option value="Receita">Receita</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>

                <div className="flex justify-end">
                    <Button
                        text={isEditingOpen !== true ? "Adicionar" : "Salvar"}
                        className={clsx(
                            "bg-red-600 text-white font-medium px-4 py-2 sm:px-6 rounded-md",
                            "hover:bg-red-500 dark:hover:bg-red-400",
                            "transition-colors duration-200 ease-in-out cursor-pointer"
                        )}
                        handleClick={(e) => {
                            e.preventDefault()

                            // transactions.some((t) => t.isEditing) ? editingTransaction(description, value, type) : handleSubmit()

                            const isEditing = transactions.some((t) => t.isEditing)

                            if (isEditing) {
                                editingTransaction(description, value, type)
                                setSucessMessageEdit("Transação Editada com sucesso!")
                            } else {
                                handleSubmit()
                                setSucessMessageEdit("Transação adicionada com sucesso!")
                            }

                            resetForm()

                            setTimeout(() => {
                                setIsActive(false)
                                setSucessMessage(false)
                            }, 3000)
                        }}
                    />

                    {isEditingOpen !== false ?
                        <Button
                            text="Cancelar"
                            className={clsx(
                                "px-4 py-2 sm=px-6 ml-2 rounded-md",
                                "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200",
                                "hover:bg-gray-500 hover:text-gray-200 dark:hover:bg-gray-600 transition"
                            )}
                            handleClick={(e) => {
                                e.preventDefault()
                                resetForm()
                                cancelEdit()
                            }}
                        />
                        : ""

                    }
                </div>
            </form>
        </section >
    )
}

export default AddTransaction