import { getTotalExpensePerCategory } from "./Balance";
import { getTotalExpense } from "./Balance";

function Expense ({ category, transactions }) {
    const total = getTotalExpensePerCategory(transactions, category)

    return (
        <li>{category} <progress value={total} className="progressBar" max={getTotalExpense(transactions)}></progress> {total} kr</li>
    )
}

export default Expense;