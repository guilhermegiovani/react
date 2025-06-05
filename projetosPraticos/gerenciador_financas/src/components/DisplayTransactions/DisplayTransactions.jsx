import { clsx } from "clsx"
import Button from "../Button/Button"
import DeleteModal from "../DeleteModal/DeleteModal"
import { Ban, Pencil } from "lucide-react"
import { Trash } from 'phosphor-react'
import { useState } from "react"
import { useTransaction } from "../TransactionContext/TransactionContext"
import NavFilter from "../NavFilter/NavFilter"
import SummaryCards from "../SummaryCards/SummaryCards"

function DisplayTransactions() {

    const { transactions, cancelTransaction, handleDelete, editTransaction } = useTransaction()

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState(null)


    const [displayTransaction, setDisplayTransaction] = useState("Todas")

    let filteredTransactions = transactions

    if (displayTransaction === "Receitas") {
        filteredTransactions = transactions.filter((transaction) => transaction.tipo === "Receita")
    } else if (displayTransaction === "Despesas") {
        filteredTransactions = transactions.filter((transaction) => transaction.tipo === "Despesa")
    }

    return (

        <section className={clsx(
            "px-4 pt-2 sm:px-6 sm:py-5 max-w-[350px] sm:max-w-lg mx-auto",
            "bg-white dark:bg-gray-800",
            "shadow-lg rounded-xl mb-10",
            transactions.length > 0 ? "space-y-4 sm:pb-2" : ""
        )}>
            {/* Cards de Resumo */}

            <SummaryCards />

            {/* Filtros */}

            {transactions.length > 0 ?
                <NavFilter filterActive={setDisplayTransaction} />
                : ""
            }

            {/* Lista de Transações */}
            <div className="space-y-3">
                {filteredTransactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className={clsx(
                            "flex justify-between items-center", // max-h-72 overflow-y-auto
                            "border-b last:border-b-0",
                            "border-gray-300 dark:border-gray-600 pb-3",
                            transaction.isCanceled === true ? "opacity-50" : ""
                        )}
                    >
                        <div>
                            <p className={clsx(
                                "text-base font-semibold",
                                "text-gray-800 dark:text-gray-300",
                                transaction.isCanceled === true ? "line-through text-gray-400" : ""
                            )}>{transaction.descricao}</p>
                            <p className={clsx(
                                "text-[12px] text-gray-600 dark:text-gray-500",
                                transaction.isCanceled === true ? "line-through text-gray-400" : ""
                            )}>{transaction.data}</p>
                        </div>

                        <div className="flex gap-4">
                            <p
                                className={clsx(
                                    "font-semibold",
                                    transaction.tipo === "Receita"
                                        ? "text-green-600"
                                        : "text-red-600"
                                )}
                            >
                                {transaction.valor.toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}
                            </p>

                            <Button
                                text={
                                    <Pencil size={25} weight="fill"
                                        className="text-gray-500 hover:text-blue-500 transition cursor-pointer"
                                    />
                                }
                                handleClick={() => editTransaction(transaction.id)}
                            />

                            <Button
                                text={
                                    <Ban size={25} weight="fill"
                                        className="text-gray-500 hover:text-red-500 transition cursor-pointer"
                                    />
                                }
                                handleClick={() => cancelTransaction(transaction.id)}
                            />

                            <Button
                                text={
                                    <Trash size={25} weight="fill"
                                        className="text-gray-500 hover:text-red-500 transition cursor-pointer"
                                    />
                                }
                                handleClick={() => {
                                    setSelectedTransaction(transaction)
                                    setIsModalOpen(true)
                                }}
                            />
                        </div>

                    </div>
                ))}
            </div>

            <DeleteModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onConfirm={(id) => handleDelete(id)}
                transaction={selectedTransaction}
            />
        </section>
    )
}

export default DisplayTransactions