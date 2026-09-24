import Expense from "./Expense";

function ExpensesList({ transactions, exchangeRate, currency }) {
    const expenseCategories = [...new Set(
        transactions
            .filter(t => t.type === "utgift")
            .map(t => t.category)
    )]

    return (
        <ul>
            {expenseCategories.map(category => (
                <Expense 
                    key={category} 
                    category={category} 
                    transactions={transactions} 
                    exchangeRate={exchangeRate}
                    currency={currency}
                />
            ))}
        </ul>
    )
}

export default ExpensesList;