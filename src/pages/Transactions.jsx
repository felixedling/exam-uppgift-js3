import TransactionsList from "../components/TransactionsList"
import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";
import { useState } from "react";
import { months } from "../utils/utils";

function Transactions({ transactions, onAddTransaction, exchangeRate, currency }){
    const [searchTerm, setSearchTerm] = useState('')
    
    const filteredTransactions = transactions.filter(t => {
        const monthName = months[t.date.month - 1].toLowerCase()
        return monthName.includes(searchTerm.toLowerCase())
    })

    return (
        <div className="container">
            <Header title="Alla transaktioner" />
            <TransactionForm onAddTransaction={onAddTransaction} transactions={transactions} />
            <input 
                className="filterBtn"
                type="text"
                placeholder="Filtrera månad"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} 
            />
            <div className="transactionsList">
                <TransactionsList 
                    transactions={filteredTransactions}
                    exchangeRate={exchangeRate}
                    currency={currency}
                />
            </div>
        </div>
    )
}

export default Transactions;