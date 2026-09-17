export const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]

export function getCurrentMonth() {
    return new Date().getMonth() + 1;
}

export function filterByMonth(transactions, month) {
    return transactions.filter(t => t.date.month === month)
}