import { useState } from 'react'
import _styles from './MoneyInput.module.css'
import { TLanguage } from '../types/language'
import { convertToCents, formatEuro, numbersRegex } from '../helpers/helpers'

// translation imports
import enTranslation from '../locales/en.json'
import deTranslation from '../locales/de.json'

type Props = {
  setAmountInCents: (value: number) => void
  locale: TLanguage
  isDisabled?: boolean
  hasError?: boolean
}
export default function MoneyInput({ setAmountInCents, locale, isDisabled, hasError }: Props) {
  const [moneyStr, setMoneyStr] = useState('0.00')

  /* Neither I am passing this function to any child component, nor using it in useEffect so,
    I didn't wrap it into useCallback. Memoizing might decrease the performance in this case. */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value
    if (numbersRegex.test(inputValue)) {
      setMoneyStr(inputValue)
      setAmountInCents(convertToCents(inputValue))
    }
  }

  const handleBlur = () => {
    // When the input loses focus, format the value accordingly
    setAmountInCents(convertToCents(moneyStr))
    // then format the input field
    setMoneyStr(formatEuro(moneyStr))
  }

  const handleKeyboard = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      setMoneyStr('')
    }

    if (e.key === 'Enter') {
      handleBlur()
    }
  }

  const getClassName = () => {
    if (isDisabled) return _styles.disabledInput
    if (hasError) return _styles.errorInput
    return _styles.input
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="moneyInput" className={_styles.label}>
        {locale === 'en' ? enTranslation.MoneyInput.label : deTranslation.MoneyInput.label}
      </label>
      <input
        id="moneyInput"
        type="text"
        name="currency"
        value={moneyStr}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyboard}
        className={getClassName()}
        disabled={isDisabled}
      />
    </form>
  )
}
