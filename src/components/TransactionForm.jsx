import { useState } from "react";
const expenseCategories = ["Boende", "Mat", "Transport", "Prenumeration", "Nöje", "Övrigt"]
const incomeCategories = ["Lön", "Extra", "Bidrag"]

function TransactionForm ({ transactions, onAddTransaction }) {
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [type, setType] = useState('utgift')
    const [category, setCategory] = useState('')
    const [date, setDate] = useState('')

    const availableCategories = type === 'utgift' ? expenseCategories : incomeCategories

    function handleTypeChange(newType) {
        setType(newType)
        setCategory('') // 
    }

    function handleSubmit(e) {
        e.preventDefault()

        const [year, month, day] = date.split('-').map(Number)

        const newTransaction = {
            id: Math.max(...transactions.map(t => t.id), 0) + 1,
            description,
            amount: Number(amount),
            type,
            category,
            date: {
                year,
                month,
                day,
            },
        }

        onAddTransaction(newTransaction)

        setDescription('')
        setAmount('')
        setCategory('')
        setDate('')
    }

    return (
        <section>
            <h2>Lägg till transaktion</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    className="addTransaction"
                    placeholder="Beskrivning"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)} 
                />
                <input 
                    type="number"
                    placeholder="Belopp"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)} 
                />
                <select value={type} onChange={e => handleTypeChange(e.target.value)}>
                    <option value="utgift">Utgift</option>
                    <option value="inkomst">Inkomst</option>
                </select>
                <select value={category} onChange={e => setCategory(e.target.value)}>
                    <option value="">Välj kategori</option>
                    {availableCategories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                    ))}
                </select>
                <input 
                    type="date"
                    value={date}
                    onChange={e => setDate(e.target.value)}
                />
                <button type="submit">Lägg till</button>
            </form>
        </section>
    )
}

export default TransactionForm;