import clsx from "clsx"
import { useTransaction } from "../TransactionContext/TransactionContext"
import Card from "../Card/Card"
import { DollarSign, ArrowUpRight, ArrowDownRight } from "lucide-react"

function SummaryCards() {

    const { expenses, revenues } = useTransaction()

    const totalExpenses = expenses.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const totalRevenues = revenues.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    const totalBalance = () => {
        const balance = revenues - expenses
        return balance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }

    const getCardsClasses = clsx(
        "text-md sm:text-lg font-semibold",
        "rounded-2xl p-2 shadow",
        "flex flex-col items-center"
    )

    return (
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
    )
}

export default SummaryCards