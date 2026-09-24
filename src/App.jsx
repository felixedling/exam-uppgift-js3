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

  const [currency, setCurrency] = useState('SEK')
  const [exchangeRate, setExchangeRate] = useState(1)

  useEffect(() => {
    if (currency === 'SEK') {
        setExchangeRate(1)
        return
    }

    fetch(`https://api.frankfurter.dev/v2/rate/sek/${currency.toLowerCase()}`)
        .then(res => res.json())
        .then(data => setExchangeRate(data.rate))
        .catch(error => console.error("Fel vid hämtning av växelkurs:", error))
}, [currency])

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
            currency={currency}
            exchangeRate={exchangeRate}
            onCurrencyChange={setCurrency}
          />
        }
      />
      <Route 
        path="/alltransactions" 
        element={
          <Transactions 
            transactions={allTransactions}
            onAddTransaction={handleAddTransaction}
            exchangeRate={exchangeRate}
            currency={currency}
          />
        } 
      />
      <Route 
        path="/allexpenses" 
        element={
          <Expenses 
            transactions={allTransactions}
            selectedMonth={selectedMonth}
            onPreviousMonth={previousMonth}
            onNextMonth={nextMonth}
            currency={currency}
            exchangeRate={exchangeRate}
          />
        }
      />
    </Routes>
  )
}

export default App
