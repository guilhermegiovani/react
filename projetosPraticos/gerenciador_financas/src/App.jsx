import { useState } from 'react'
import './App.css'
import Header from "./components/Header/Header"
import AddTransaction from './components/AddTransaction/AddTransaction'
import DisplayTransactions from './components/DisplayTransactions/DisplayTransactions'

function App() {

  return (
    <main>
      <Header />
      <AddTransaction />
      <DisplayTransactions />
    </main>
  )
}

export default App
