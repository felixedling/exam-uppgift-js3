import TransactionsList from "../components/TransactionsList"
import Header from "../components/Header";
import TransactionForm from "../components/TransactionForm";
import { useState } from "react";
import { months } from "../utils/utils";

function Transactions({ transactions, onAddTransaction }){
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
                placeholder="Välj månad"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} 
            />
            <div className="transactionsList">
                <TransactionsList transactions={filteredTransactions} />
            </div>
        </div>
    )
}

export default Transactions;