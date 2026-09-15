import TransactionsList from "../components/TransactionsList";
import transactions from "../data/transactions";
import Header from "../components/Header";

function Home(){
    const latestTransactions = transactions.slice(-4)

    return (
        <div className="container">
            <Header title="Saldo"/>
            <div className="balanceContainer">

            </div>
            <div className="expensesContainer">
                <h3>Utgifter per kategori</h3>
            </div>
            <div className="transactionsContainer">
                <h3>Senaste transaktioner</h3>
                <TransactionsList transactions={latestTransactions}/>
            </div>
        </div>
    )
}

export default Home;