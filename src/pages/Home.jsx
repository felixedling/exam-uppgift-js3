import TransactionsList from "../components/TransactionsList";
import Header from "../components/Header";
import DisplayBalance from "../components/BalanceDisplay";
import { months } from "../utils/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { filterByMonth } from "../utils/utils";
import ExpensesList from "../components/ExpensesList";
import CurrencySelector from "../components/CurrencySelector";

function Home({ transactions, selectedMonth, onPreviousMonth, onNextMonth, currency, onCurrencyChange, exchangeRate }){
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
            <div className="dateAndCurrency">
                <div className="date">
                    <button className="leftarrow" onClick={onPreviousMonth}><ArrowLeft/></button>
                    <p>{months[selectedMonth - 1]}</p>
                    <button className="rightarrow" onClick={onNextMonth}><ArrowRight/></button>
                </div>
                <div className="currency">
                    <CurrencySelector currency={currency} onCurrencyChange={onCurrencyChange} />
                </div>
            </div>
            <div className="balanceContainer">
                <DisplayBalance 
                    transactions={filteredTransactions} 
                    exchangeRate={exchangeRate} 
                    currency={currency} 
                />
            </div>
            <div className="contentContainer">
                <div className="expensesContainer">
                    <h3>Utgifter per kategori</h3>
                    <ExpensesList 
                        transactions={filteredTransactions} 
                        limit={4}
                        exchangeRate={exchangeRate} 
                        currency={currency} 
                    />
                </div>
                <div className="transactionsContainer">
                    <h3>Senaste transaktioner</h3>
                    <TransactionsList 
                        transactions={latestTransactions}
                        exchangeRate={exchangeRate} 
                        currency={currency} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;