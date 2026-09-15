import TransactionsList from "../components/TransactionsList"
import transactions from "../data/transactions"
import Header from "../components/Header";

function Transactions(){
    return (
        <div>
            <Header title="Alla transaktioner" />
            <TransactionsList transactions={transactions}/>
        </div>
    )
}

export default Transactions;