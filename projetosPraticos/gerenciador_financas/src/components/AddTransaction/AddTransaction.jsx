import Input from "../Input/Input"
import Button from "../Button/Button"
import { clsx } from "clsx"

function AddTransaction() {

    return (
        <section
            className={clsx(
                "bg-white",
                "p-5",
                "rounded-xl",
                "shadow-md",
                "w-full",
                "max-w-xl",
                "mx-auto"
            )}
        >
            <h2 className={clsx("text-xl", "font-semibold", "mb-2")}>
                Adicionar Transação
            </h2>

            <form className={clsx("flex", "flex-col", "gap-4")}>
                <Input
                    type="text"
                    placeholder="Descrição"
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
                        placeholder="Valo em R$"
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
                    >
                        <option value="Receita">Receita</option>
                        <option value="Despesa">Despesa</option>
                    </select>
                </div>

                <div className="flex justify-end">
                    <Button
                        text="Adicionar"
                        className={clsx(
                            "bg-red-500 text-white font-medium px-4 py-2 rounded-md",
                            "hover:bg-red-600 transition-colors duration-200 ease-in-out cursor-pointer"
                        )}
                    />
                </div>
            </form>
        </section>
    )
}

export default AddTransaction