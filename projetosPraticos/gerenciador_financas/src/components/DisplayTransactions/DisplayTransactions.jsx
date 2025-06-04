import { clsx } from "clsx"
import Button from "../Button/Button"
import Card from "../Card/Card"
import DeleteModal from "../DeleteModal/DeleteModal"
import { DollarSign, ArrowUpRight, ArrowDownRight, Ban } from "lucide-react"
import { Trash } from 'phosphor-react'
import { useEffect, useRef, useState } from "react"
import { useTransaction } from "../TransactionContext/TransactionContext"

function DisplayTransactions() {

    const { transactions, cancelTransaction, expenses, revenues, handleDelete } = useTransaction()

    const totalExpenses = expenses.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const totalRevenues = revenues.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const totalBalance = () => {
        const balance = revenues - expenses
        return balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    const todasRef = useRef(null)
    const receitasRef = useRef(null)
    const despesasRef = useRef(null)

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedTransaction, setSelectedTransaction] = useState(null)

    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

    const [displayTransaction, setDisplayTransaction] = useState("Todas")

    useEffect(() => {

        const refs = {
            Todas: todasRef,
            Receitas: receitasRef,
            Despesas: despesasRef
        }

        const activeRef = refs[displayTransaction]
        if (activeRef?.current) {
            const { offsetLeft, offsetWidth } = activeRef.current
            setIndicatorStyle({ left: offsetLeft, width: offsetWidth })
        }

    }, [displayTransaction])

    let filteredTransactions = transactions

    if (displayTransaction === "Receitas") {
        filteredTransactions = transactions.filter((transaction) => transaction.tipo === "Receita")
    } else if (displayTransaction === "Despesas") {
        filteredTransactions = transactions.filter((transaction) => transaction.tipo === "Despesa")
    }

    const getButtonClasses = () => {
        return clsx(
            "cursor-pointer transition-colors duration-300",
            "px-3 pb-1"
        )
    }

    const getCardsClasses = clsx(
        "text-md sm:text-lg font-semibold",
        "rounded-2xl p-2 shadow",
        "flex flex-col items-center"
    )

    return (

        <section className={clsx(
            "space-y-6 px-4 pt-4 sm:px-6 sm:pt-5 max-w-[350px] sm:max-w-lg mx-auto",
            "bg-white dark:bg-gray-800",
            "shadow-lg rounded-xl mb-10"
        )}>
            {/* Cards de Resumo */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
                <Card
                    title="Receitas"
                    value={totalRevenues}
                    icon={<ArrowUpRight className="text-green-600 dark:text-green-200 w-7 h-7 sm:w-10 sm:h-10" />}
                    className={clsx(
                        getCardsClasses,
                        "bg-green-100 dark:bg-green-700")
                    }
                    colorFont="text-sm sm:text-lg text-green-700 dark:text-green-300"
                />

                <Card
                    title="Despesas"
                    value={totalExpenses}
                    icon={<ArrowDownRight className="text-red-600 dark:text-red-200 w-7 h-7 sm:w-10 sm:h-10" />}
                    className={clsx(
                        getCardsClasses,
                        "bg-red-100 dark:bg-red-700")
                    }
                    colorFont="text-sm sm:text-lg text-red-700 dark:text-red-300"
                />

                <Card
                    title="Saldo"
                    value={totalBalance()}
                    icon={<DollarSign className="text-indigo-600 dark:text-indigo-200 w-7 h-7 sm:w-10 sm:h-10" />}
                    className={clsx(
                        getCardsClasses,
                        "bg-indigo-100 dark:bg-indigo-700")
                    }
                    colorFont="text-sm sm:text-lg text-indigo-700 dark:text-indigo-300"
                />
            </div>

            {/* Filtros */}
            <nav className={clsx(
                "relative flex gap-3 font-semibold text-gray-500 dark:text-gray-300",
                "border-b border-gray-300 dark:border-gray-600 mb-4" // border-b border-gray-300 pl-2 mb-4
            )}>
                <Button
                    text="Todas"
                    ref={todasRef}
                    className={getButtonClasses("Todas")}
                    handleClick={() => {
                        setDisplayTransaction("Todas")
                    }}
                />

                <Button
                    text="Receitas"
                    ref={receitasRef}
                    className={getButtonClasses("Receitas")}
                    handleClick={() => {
                        setDisplayTransaction("Receitas")
                    }}
                />

                <Button
                    text="Despesas"
                    ref={despesasRef}
                    className={getButtonClasses("Despesas")}
                    handleClick={() => {
                        setDisplayTransaction("Despesas")
                    }}
                />

                <span
                    className="absolute bottom-[-1px] h-[1px] bg-purple-700 dark:bg-purple-500 transition-all duration-300"
                    style={{
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                    }}
                />
            </nav>

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
                            // handleDelete(transaction.id, transaction.descricao, transaction.valor)
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