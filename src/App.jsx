import './App.css'
import { Routes, Route } from 'react-router-dom';
import Transactions from './pages/Transactions';
import transactions from './data/transactions';
import Home from './pages/Home';
import { useState, useEffect } from 'react';
import { getCurrentMonth } from './utils/utils';
import Expenses from './pages/Expenses';

function App() {
  const [allTransactions, setAllTransactions] = useState(() => {
    const saved = localStorage.getItem('transactions')
    return saved ? JSON.parse(saved) : transactions
  })

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(allTransactions))
  }, [allTransactions])

  function handleAddTransaction(newTransaction) {
    setAllTransactions([...allTransactions, newTransaction])
  }

  const [selectedMonth, setSelectedMonth] = useState(getCurrentMonth())

  function previousMonth() {
    if(selectedMonth === 1) {
      setSelectedMonth(12)
    } else {
      setSelectedMonth(selectedMonth - 1)
    }
  }

  function nextMonth() {
    if(selectedMonth === 12) {
      setSelectedMonth(1)
    } else {
      setSelectedMonth(selectedMonth + 1)
    }
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <Home 
            transactions={allTransactions}
            selectedMonth={selectedMonth}
            onPreviousMonth={previousMonth}
            onNextMonth={nextMonth}
          />
        }
      />
      <Route path="/alltransactions" element={<Transactions transactions={allTransactions} onAddTransaction={handleAddTransaction}/>} />
      <Route 
        path="/allexpenses" 
        element={
          <Expenses 
            transactions={allTransactions}
            selectedMonth={selectedMonth}
            onPreviousMonth={previousMonth}
            onNextMonth={nextMonth}
          />
        }
      />
    </Routes>
  )
}

export default App
