
import './App.css'
import Header from "./components/Header/Header"
import AddTransaction from './components/AddTransaction/AddTransaction'
import DisplayTransactions from './components/DisplayTransactions/DisplayTransactions'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import { clsx } from "clsx"
import { useState } from 'react'

function App() {

  const [description, setDescription] = useState("")
  const [value, setValue] = useState("")
  const [type, setType] = useState("")
  const [isEditingOpen, setIsEditingOpen] = useState(false)

  return (
    <main className={clsx(
      "relative min-h-screen text-black",
      "bg-gray-200 dark:bg-gray-900",
      "transition-colors duration-300"
    )}>
      <ThemeToggle />
      <Header />
      <AddTransaction
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        type={type}
        setType={setType}
        isEditingOpen={isEditingOpen}
        setIsEditingOpen={setIsEditingOpen}
      />
      <DisplayTransactions
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        type={type}
        setType={setType}
        isEditingOpen={isEditingOpen}
        setIsEditingOpen={setIsEditingOpen}
      />
    </main>
  )
}

export default App
