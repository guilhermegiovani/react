import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TransactionProvider } from './components/TransactionContext/TransactionContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TransactionProvider>
      <App />
    </TransactionProvider>
  </StrictMode>
)
