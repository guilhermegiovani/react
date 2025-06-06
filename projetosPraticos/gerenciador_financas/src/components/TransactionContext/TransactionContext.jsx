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
            isCanceled: false,
            isEditing: false,
            data: new Date().toLocaleDateString("pt-BR")
        }

        setTransactions((prev) => [...prev, newTransaction])
    }

    const deleteTransaction = (id) => {
        const newArray = transactions.filter((transaction) => transaction.id !== id)
        setTransactions(newArray)
    }

    const editTransaction = (id) => {
        const newArray = transactions.map((transaction) => transaction.id === id ? { ...transaction, isEditing: true } : transaction)
        setTransactions(newArray)
    }

    const [isActive, setIsActive] = useState(false)

    const editingTransaction = (description, value, type) => {
        if (description.trim() === "") return setIsActive(true)
        if (value === "" || value < 0) return setIsActive(true)
        if (type === "") return setIsActive(true)

        const newArray = transactions.map((transaction) => transaction.isEditing === true ? {...transaction, descricao: description, valor: Number(value), tipo: type, isEditing: false } : transaction)

        setTransactions(newArray)
    }

    const handleDelete = (id) => {
        deleteTransaction(id)
    }

    const cancelTransaction = (id) => {
        const newArray = transactions.map((transaction) => transaction.id === id ? { ...transaction, isCanceled: true } : transaction)
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
            value={{ transactions, addTransaction, deleteTransaction, cancelTransaction, expenses, revenues, handleDelete, editTransaction, editingTransaction, isActive, setIsActive }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction() {
    return useContext(TransactionContext)
}