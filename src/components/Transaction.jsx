import { months } from "../utils/utils";

function Transaction({description, amount, type, date}) {
    const sign = type === "inkomst" ? "+" : "-"
    const colorClass = type === "inkomst" ? "income" : "expense"

    return (
        <li>
            {description} ({date.day} {months[date.month -1]}) <span className={colorClass}>{sign}{amount} kr</span>
        </li>
    )
}

export default Transaction;