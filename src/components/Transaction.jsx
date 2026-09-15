import { months } from "../utils/dates";

function Transaction({description, amount, type, category, date}) {
    return (
        <li>
            {description} - {amount} kr ({date.day} {months[date.month -1]})
        </li>
    )
}

export default Transaction;