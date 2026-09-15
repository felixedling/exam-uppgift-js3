export const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"]

function getCurrentMonth() {
    return months[new Date().getMonth()];
}

export default getCurrentMonth;