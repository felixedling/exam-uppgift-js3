import { getTotalExpensePerCategory } from "./Balance";
import { getTotalExpense } from "./Balance";

function Expense ({ category, transactions }) {
    const total = getTotalExpensePerCategory(transactions, category)

    return (
        <li>
            <span className="category">{category}</span>
            <progress value={total} className="progressBar" max={getTotalExpense(transactions)}></progress>
            <span className="total">{total} kr</span>
        </li>
    )
}

export default Expense;