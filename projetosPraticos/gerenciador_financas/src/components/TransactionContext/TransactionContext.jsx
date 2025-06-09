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

        // localStorage.setItem("transactions", JSON.stringify(transactions))
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

        const updatedTransactions = [...transactions, newTransaction]

        setTransactions(updatedTransactions)
        localStorage.setItem("transactions", JSON.stringify(updatedTransactions))
        setSucessMessage(true)
    }

    const deleteTransaction = (id) => {
        const newArray = transactions.filter((transaction) => transaction.id !== id)
        setTransactions(newArray)
    }

    const editTransaction = (id) => {
        const newArray = transactions.map((transaction) => transaction.id === id
            ? { ...transaction, isEditing: true }
            : { ...transaction, isEditing: false })
        setTransactions(newArray)
    }

    const [isActive, setIsActive] = useState(false)
    const [sucessMessage, setSucessMessage] = useState(false)

    const editingTransaction = (description, value, type) => {
        if (description.trim() === "") return setIsActive(true)
        if (value === "" || value < 0) return setIsActive(true)
        if (type === "") return setIsActive(true)

        const newArray = transactions.map((transaction) => transaction.isEditing === true ? { ...transaction, descricao: description, valor: Number(value), tipo: type, isEditing: false } : transaction)

        setTransactions(newArray)
        setSucessMessage(true)
    }

    const cancelEdit = () => {
        const newArray = transactions.map((transaction) => ({ ...transaction, isEditing: false }))
        setTransactions(newArray)
    }

    const [sucessMessageDelete, setSucessMessageDelete] = useState(false)

    const handleDelete = (id) => {
        deleteTransaction(id)
        setSucessMessageDelete(true)
        setTimeout(() => {
            setSucessMessageDelete(false)
        }, 3000)
    }

    const cancelTransaction = (id) => {
        const newArray = transactions.map((transaction) => transaction.id === id ? { ...transaction, isCanceled: true, isEditing: false } : transaction)
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
            value={{ transactions, addTransaction, deleteTransaction, cancelTransaction, expenses, revenues, handleDelete, editTransaction, editingTransaction, isActive, setIsActive, cancelEdit, sucessMessage, setSucessMessage, sucessMessageDelete }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

export function useTransaction() {
    return useContext(TransactionContext)
}