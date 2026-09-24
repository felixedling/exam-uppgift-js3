import Header from "../components/Header";
import ExpensesList from "../components/ExpensesList";
import { months } from "../utils/utils";
import { filterByMonth } from "../utils/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";

function Expenses ({ transactions, selectedMonth, onPreviousMonth, onNextMonth }) {
    const filteredTransactions = filterByMonth(transactions, selectedMonth)

    return (
        <div className="container">
            <Header title="Alla utgifter"/>
            <div className="date">
                <button className="leftarrow" onClick={onPreviousMonth}><ArrowLeft/></button>
                <p>{months[selectedMonth - 1]}</p>
                <button className="rightarrow" onClick={onNextMonth}><ArrowRight/></button>
            </div>
            <ExpensesList transactions={filteredTransactions} />
        </div>
    )
}

export default Expenses;