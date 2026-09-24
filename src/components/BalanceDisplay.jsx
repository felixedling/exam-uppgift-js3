import { getTotalIncome, getTotalExpense, getBalance } from "./Balance";
import { formatAmount } from "../utils/utils";

function DisplayBalance ({ transactions, exchangeRate, currency }){
    return (
        <>
        <div>
            <p>Inkomster</p>
            <h3>{formatAmount(getTotalIncome(transactions), exchangeRate, currency)}</h3>
        </div>
        <div>
            <p>Utgifter</p>
            <h3>{formatAmount(getTotalExpense(transactions), exchangeRate, currency)}</h3>
        </div>
        <div>
            <p>Saldo</p>
            <h3>{formatAmount(getBalance(transactions), exchangeRate, currency)}</h3>
        </div>
        </>
    )
}

export default DisplayBalance;