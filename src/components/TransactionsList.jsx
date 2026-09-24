import Transaction from "./Transaction";

function TransactionsList({ transactions, exchangeRate, currency }) {
    const sortedTransactions = [...transactions].sort((a, b) => b.id - a.id);

    return (
        <ul>
            {sortedTransactions.map(t => (
            <Transaction 
                key={t.id} {...t}
                exchangeRate={exchangeRate}
                currency={currency} 
            />
            ))}
        </ul>
    )
}

export default TransactionsList;