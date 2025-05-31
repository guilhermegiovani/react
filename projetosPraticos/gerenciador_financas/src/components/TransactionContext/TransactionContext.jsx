import { createContext, useState, useContext, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';


export const TransactionContext = createContext()

export function TransactionProvider({ children }) {

    const [transactions, setTransactions] = useState(() => {
        const storedTransactions = localStorage.getItem("transactions")
        return storedTransactions ? JSON.parse(storedTransactions) : []
    })

    useEffect(() => {
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

        for(let i = 0; i < getExpenses.length; i++) {
            setExpenses(expenses + getExpenses[i].valor)
        }

        console.log(expenses)
    }

    const calculateRevenues = () => {}

    return (
        <TransactionContext.Provider
            value={{ transactions, addTransaction, deleteTransaction, calculateExpenses, calculateRevenues }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction() {
    return useContext(TransactionContext)
}