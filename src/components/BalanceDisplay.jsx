import { getTotalIncome, getTotalExpense, getBalance } from "./Balance";

function DisplayBalance ({ transactions }){
    return (
        <>
        <div>
            <p>Inkomster</p>
            <h3>{getTotalIncome(transactions)} kr</h3>
        </div>
        <div>
            <p>Utgifter</p>
            <h3>{getTotalExpense(transactions)} kr</h3>
        </div>
        <div>
            <p>Saldo</p>
            <h3>{getBalance(transactions)} kr</h3>
        </div>
        </>
    )
}

export default DisplayBalance;