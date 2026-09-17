import Expense from "./Expense";

function ExpensesList({ transactions }) {
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
                />
            ))}
        </ul>
    )
}

export default ExpensesList;