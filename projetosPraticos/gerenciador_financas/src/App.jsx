import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header"
import AddTransaction from './components/AddTransaction/AddTransaction'
import DisplayTransactions from './components/DisplayTransactions/DisplayTransactions'
import ThemeToggle from './components/ThemeToggle/ThemeToggle'

function App() {

  return (
    <main>
      <ThemeToggle />
      <Header />
      <AddTransaction />
      <DisplayTransactions />
    </main>
  )
}

export default App
