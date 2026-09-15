import Transaction from "./Transaction";

function TransactionsList({ transactions }) {
    const sortedTransactions = [...transactions].sort((a, b) => b.id - a.id);

    return (
        <ul>
            {sortedTransactions.map(t => (
            <Transaction key={t.id} {...t} />
            ))}
        </ul>
    )
}

export default TransactionsList;