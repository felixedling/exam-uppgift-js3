import TransactionsList from "../components/TransactionsList";
import Header from "../components/Header";
import DisplayBalance from "../components/BalanceDisplay";
import { months } from "../utils/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { filterByMonth } from "../utils/utils";
import ExpensesList from "../components/ExpensesList";
import { getTotalExpensePerCategory } from "../components/Balance";

function Home({ transactions, selectedMonth, onPreviousMonth, onNextMonth }){
    const filteredTransactions = filterByMonth(transactions, selectedMonth)

    const latestTransactions = [...filteredTransactions]
        .sort((a, b) => {
            const dateA = new Date(a.date.year, a.date.month, a.date.day)
            const dateB = new Date(b.date.year, b.date.month, b.date.day)
            return dateB - dateA
        })
        .slice(0, 4)

    return (
        <div className="container">
            <Header title="Saldo"/>
            <div className="date">
                <button className="leftarrow" onClick={onPreviousMonth}><ArrowLeft/></button>
                <p>{months[selectedMonth - 1]}</p>
                <button className="rightarrow" onClick={onNextMonth}><ArrowRight/></button>
            </div>
            <div className="balanceContainer">
                <DisplayBalance transactions={filteredTransactions}/>
            </div>
            <div className="contentContainer">
                <div className="expensesContainer">
                    <h3>Utgifter per kategori</h3>
                    <ExpensesList transactions={filteredTransactions} limit={4}/>
                </div>
                <div className="transactionsContainer">
                    <h3>Senaste transaktioner</h3>
                    <TransactionsList transactions={latestTransactions}/>
                </div>
            </div>
        </div>
    )
}

export default Home;