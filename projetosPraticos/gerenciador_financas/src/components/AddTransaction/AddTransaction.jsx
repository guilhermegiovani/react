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
        if(value === "") return
        if(type === "") return

        addTransaction(description.trim(), value, type)
        setDescription("")
        setValue("")
        setType("")
    }

    return (
        <section
            className={clsx(
                "bg-white",
                "p-5",
                "rounded-xl",
                "shadow-md",
                "w-full",
                "max-w-lg",
                "mx-auto mb-5"
            )}
        >
            <h2 className={clsx("text-xl", "font-semibold", "mb-2")}>
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
                        "border-gray-300",
                        "p-2",
                        "rounded-md"
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
                            "border-gray-300",
                            "p-2",
                            "rounded-md"
                        )}
                    />

                    <select
                        className={clsx(
                            "w-1/2",
                            "border",
                            "border-gray-300",
                            "p-2",
                            "rounded-md",
                            "cursor-pointer"
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
                            "bg-red-600 text-white font-medium px-5 py-2 rounded-md",
                            "hover:bg-red-500 transition-colors duration-200 ease-in-out cursor-pointer"
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