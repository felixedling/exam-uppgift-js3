function CurrencySelector({ currency, onCurrencyChange }) {
    return (
        <select value={currency} onChange={e => onCurrencyChange(e.target.value)}>
            <option value="SEK">SEK</option>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
        </select>
    )
}

export default CurrencySelector