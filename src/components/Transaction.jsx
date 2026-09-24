import { months } from "../utils/utils";
import { formatAmount } from "../utils/utils";

function Transaction({description, amount, type, date, exchangeRate, currency}) {
    const sign = type === "inkomst" ? "+" : "-"
    const colorClass = type === "inkomst" ? "income" : "expense"

    return (
        <li>
            {description} <span className={colorClass}>{sign}{formatAmount(amount, exchangeRate, currency)}</span> ({date.day} {months[date.month - 1]}
        </li>
    )
}

export default Transaction;