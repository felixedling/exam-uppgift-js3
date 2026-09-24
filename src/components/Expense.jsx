import { getTotalExpensePerCategory, getTotalExpense } from "./Balance";
import { formatAmount } from "../utils/utils";

function Expense ({ category, transactions, exchangeRate, currency }) {
    const total = getTotalExpensePerCategory(transactions, category)

    return (
        <li>
            <span className="category">{category}</span>
            <progress value={total} className="progressBar" max={getTotalExpense(transactions)}></progress>
            <span className="total">{formatAmount(total, exchangeRate, currency)}</span>
        </li>
    )
}

export default Expense;