import { createContext, useState, useContext, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';


export const TransactionContext = createContext()

export function TransactionProvider({ children }) {

    const [transactions, setTransactions] = useState(() => {
        const storedTransactions = localStorage.getItem("transactions")
        return storedTransactions ? JSON.parse(storedTransactions) : []
    })

    useEffect(() => {
        calculateExpenses()
        calculateRevenues()

        localStorage.setItem("transactions", JSON.stringify(transactions))
    }, [transactions])

    const addTransaction = (description, value, type) => {
        const newTransaction = {
            descricao: description,
            valor: Number(value),
            id: uuidv4(),
            tipo: type,
            data: new Date().toLocaleDateString("pt-BR")
        }

        setTransactions((prev) => [...prev, newTransaction])
    }

    const deleteTransaction = (id) => {
        const newArray = transactions.filter((transaction) => transaction.id !== id)
        setTransactions(newArray)
    }

    const [expenses, setExpenses] = useState(0)

    const calculateExpenses = () => {
        const getExpenses = transactions.filter((transaction) => transaction.tipo === "Despesa")
        const totalExpenses = getExpenses.reduce((acumulador, expensesAtual) => {
            return acumulador + expensesAtual.valor
        }, 0)

        setExpenses(totalExpenses)
    }

    const [revenues, setRevenues] = useState(0)

    const calculateRevenues = () => {
        const getRevenues = transactions.filter((transaction) => transaction.tipo === "Receita")
        const totalRevenues = getRevenues.reduce((acumulador, revenuesAtual) => {
            return acumulador + revenuesAtual.valor
        }, 0)

        setRevenues(totalRevenues)
    }

    return (
        <TransactionContext.Provider
            value={{ transactions, addTransaction, deleteTransaction, expenses, revenues }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction() {
    return useContext(TransactionContext)
}