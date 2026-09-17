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
        <div>
            <Header title="Alla transaktioner" />
            <TransactionForm onAddTransaction={onAddTransaction} transactions={transactions} />
            <input 
                type="text"
                placeholder="filtrera"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)} 
            />
            <TransactionsList transactions={filteredTransactions} />
        </div>
    )
}

export default Transactions;