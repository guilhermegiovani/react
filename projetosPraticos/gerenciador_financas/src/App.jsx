
import './App.css'
import Header from "./components/Header/Header"
import AddTransaction from './components/AddTransaction/AddTransaction'
import DisplayTransactions from './components/DisplayTransactions/DisplayTransactions'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'
import Test from './components/Test/Test'
import { clsx } from "clsx"

function App() {

  return (
    <main className={clsx(
      "min-h-screen bg-white text-black",
      "dark:bg-gray-900",
      "transition-colors duration-300"
    )}>
      <ThemeToggle />
      <Header />
      <AddTransaction />
      <DisplayTransactions />
    </main>
  )
}

export default App
