import React, {useId} from 'react'

function InputBox({
    
    amount,
    label,
    onChangedAmount,
    onChangedCurrency,
    selectedCurrency = 'usd',
    currencyOptions = [],
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    
    const id = useId();
    
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1-2'>
                <label className='text-black/40 mb-2 inline-block'>{label}</label>
                <input
                    id={id}
                    type='number'
                    value={amount}
                    disabled={amountDisabled}
                    placeholder='Amount'
                    onChange= {(e) => onChangedAmount && onChangedAmount(Number(e.target.value))}
                    className='outline-none w-full bg-transparent py-1.5'
                />
            </div>
            <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className="text-black/40 mb-2 w-full">Currency Type</p>
            <select
                value={selectedCurrency}
                disabled={currencyDisabled}
                onChange={(e) => { onChangedCurrency && onChangedCurrency(e.target.value)}}
                className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none'
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        )
    }

export default InputBox