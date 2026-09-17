export function getTotalIncome (transactions){
    return transactions
        .filter(t => t.type === "inkomst")
        .reduce((total, t) => total + t.amount, 0);
}

export function getTotalExpense(transactions){
    return transactions
        .filter(t => t.type === "utgift")
        .reduce((total, t) => total + t.amount, 0);
}

export function getBalance (transactions){
    return getTotalIncome(transactions) - getTotalExpense(transactions);
    
}

export function getTotalExpensePerCategory(transactions, category) {
    return transactions
        .filter(t => t.type === "utgift" && t.category === category)
        .reduce((total, t) => total + t.amount, 0);
}
