import { clsx } from "clsx"
import Button from "../Button/Button"
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Trash } from 'phosphor-react'
import { useState } from "react"

function DisplayTransactions() {

    const nameTransaction = ["Salário", "Aluguel", "Mercado"]
    const valueTransaction = ["6.700,00", "1.500,00", "850,00",]

    const [displayTransaction, setDisplayTransaction] = useState("")

    const getButtonClasses = (filter) => {
        return clsx(
            "cursor-pointer transition-colors",
            displayTransaction === filter
                ? "border-b border-purple-700 text-purple-700"
                : ""
        )
    }

    return (

        <section className="space-y-6 px-6 pt-4 max-w-lg mx-auto bg-white shadow-md rounded-xl mb-10">
            {/* Cards de Resumo */}
            <div className="grid grid-cols-3 gap-4">

                <div className="bg-green-100 rounded-2xl p-2 shadow flex flex-col items-center">

                    <ArrowUpRight className="text-green-600 w-10 h-10" />
                    <p className="text-lg font-semibold">Entradas</p>
                    <p className="text-lg text-green-700 font-bold">R$ 9.000,00</p>

                </div>

                <div className="bg-red-100 rounded-2xl p-2 shadow flex flex-col items-center">

                    <ArrowDownRight className="text-red-600 w-10 h-10" />
                    <p className="text-lg font-semibold">Saídas</p>
                    <p className="text-lg text-red-700 font-bold">R$ 6.200,00</p>

                </div>

                <div className="bg-blue-100 rounded-2xl p-2 shadow flex flex-col items-center">

                    <DollarSign className="text-blue-600 w-9 h-9" />
                    <p className="text-lg font-semibold">Saldo</p>
                    <p className="text-lg text-blue-700 font-bold">R$ 2.800,00</p>

                </div>

            </div>

            {/* Filtros */}
            <nav className={clsx(
                "flex gap-10 text-base font-semibold text-gray-600",
                "border-b border-gray-300 pl-2 mb-4" // border-b border-gray-300 pl-2 mb-4
            )}>
                <Button
                    text="Todas"
                    className={getButtonClasses("Todas")}
                    handleClick={() => {
                        setDisplayTransaction("Todas")
                    }}
                />

                <Button
                    text="Receitas"
                    className={getButtonClasses("Receitas")}
                    handleClick={() => {
                        setDisplayTransaction("Receitas")
                    }}
                />

                <Button
                    text="Despesas"
                    className={getButtonClasses("Despesas")}
                    handleClick={() => {
                        setDisplayTransaction("Despesas")
                    }}
                />
            </nav>

            {/* Lista de Transações */}
            <div className="space-y-3">
                {nameTransaction.map((name, index) => (
                    <div
                        key={index}
                        className="flex justify-between items-center border-b border-gray-300 pb-3"
                    >
                        <div>
                            <p className="text-lg font-semibold text-gray-800">{name}</p>
                            <p className="text-sm text-gray-600">10/04/2024</p>
                        </div>

                        <div className="flex gap-4">
                            <p
                                className={clsx(
                                    "font-bold",
                                    index === 0
                                        ? "text-green-600"
                                        : "text-red-600"
                                )}
                            >
                                R$ {valueTransaction[index]}
                            </p>
                            <button>
                                <Trash size={25} weight="fill" className="text-gray-500 hover:text-red-500 transition cursor-pointer" />
                            </button>
                        </div>

                    </div>
                ))}
            </div>
        </section>

        // <section>

        //     <div>
        //         <div>
        //             <p>Receitas</p>
        //             <p>R$ 9.000,00</p>
        //         </div>

        //         <div>
        //             <p>Despesas</p>
        //             <p>R$ 6.200,00</p>
        //         </div>

        //         <div>
        //             <p>Saldo</p>
        //             <p>R$ 2.800,00</p>
        //         </div>
        //     </div>

        //     <div>
        //         <nav>
        //             <Button text="Todas" />

        //             <Button text="Receitas" />

        //             <Button text="Despesas" />
        //         </nav>

        //         {nameTransaction.map((name, index) => (
        //             <div>
        //                 <p>{name}</p>
        //                 <p>R$ {valueTransaction[index]}</p>
        //             </div>
        //         ))

        //         }

        //     </div>

        // </section>
    )
}

export default DisplayTransactions