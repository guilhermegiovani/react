import { clsx } from "clsx"
import Button from "../Button/Button"
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Trash } from 'phosphor-react'
import { useEffect, useRef, useState } from "react"
import { useTransaction } from "../TransactionContext/TransactionContext"

function DisplayTransactions() {

    const { transactions, deleteTransaction, calculateExpenses } = useTransaction()

    const [expenses, setExpenses] = useState(0)
    const [revenues, setRevenues] = useState(0)

    const todasRef = useRef(null)
    const receitasRef = useRef(null)
    const despesasRef = useRef(null)

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

    const getButtonClasses = () => {
        return clsx(
            "cursor-pointer transition-colors duration-300",
            "px-3 mb-1"
        )
    }

    const getCardsClasses = clsx(
        "text-lg font-semibold",
        "rounded-2xl p-2 shadow",
        "flex flex-col items-center"
    )

    return (

        <section className="space-y-6 px-6 pt-4 max-w-lg mx-auto bg-white shadow-md rounded-xl mb-10">
            {/* Cards de Resumo */}
            <div className="grid grid-cols-3 gap-4">

                <div className={clsx(
                    getCardsClasses,
                    "bg-green-100"
                )} >

                    <ArrowUpRight className="text-green-600 w-10 h-10" />
                    <p>Entradas</p>
                    <p className="text-lg text-green-700">R$ 9.000,00</p>

                </div>

                <div className={clsx(
                    "bg-red-100",
                    getCardsClasses
                )}>

                    <ArrowDownRight className="text-red-600 w-10 h-10" />
                    <p>Saídas</p>
                    <p className="text-red-700">R$ 6.200,00</p>

                </div>

                <div className={clsx(
                    "bg-blue-100",
                    getCardsClasses
                )}>

                    <DollarSign className="text-blue-600 w-9 h-9" />
                    <p>Saldo</p>
                    <p className="text-blue-700">R$ 2.800,00</p>

                </div>

                <Button
                    text="Testar"
                    className={clsx(
                        "bg-red-600 text-white font-medium px-5 py-2 rounded-md",
                        "hover:bg-red-500 transition-colors duration-200 ease-in-out cursor-pointer"
                    )}
                    handleClick={() => calculateExpenses()}
                    />

            </div>

            {/* Filtros */}
            <nav className={clsx(
                "relative flex gap-3 font-semibold text-gray-500",
                "border-b border-gray-300 mb-4" // border-b border-gray-300 pl-2 mb-4
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
                    className="absolute bottom-0 h-[1px] bg-purple-600 transition-all duration-300"
                    style={{
                        left: indicatorStyle.left,
                        width: indicatorStyle.width,
                    }}
                />

            </nav>

            {/* Lista de Transações */}
            <div className="space-y-3">
                {transactions.map((transaction) => (
                    <div
                        key={transaction.id}
                        className="flex justify-between items-center border-b border-gray-300 pb-3"
                    >
                        <div>
                            <p className="text-base font-semibold text-gray-800">{transaction.descricao}</p>
                            <p className="text-[12px] text-gray-600">{transaction.data}</p>
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
                                R$ {transaction.valor}
                            </p>
                            {/* <button>
                                <Trash size={25} weight="fill" className="text-gray-500 hover:text-red-500 transition cursor-pointer" />
                            </button> */}
                            <Button
                                text={
                                    <Trash size={25} weight="fill"
                                        className="text-gray-500 hover:text-red-500 transition cursor-pointer"
                                    />
                                }
                                handleClick={() => deleteTransaction(transaction.id)}
                            />
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