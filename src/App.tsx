import { useState } from 'react'
import MoneyInput from './MoneyInput/MoneyInput'
import { TLanguage } from './types/language'
import _styles from './App.module.css'

// translation imports
import enTranslation from './locales/en.json'
import deTranslation from './locales/de.json'
import useDisable from './hooks/useDisable'
import useHasError from './hooks/useHasError'

const getLocalLang = () => {
  const storedLanguage = localStorage.getItem('language') as TLanguage | null
  return storedLanguage || 'en'
}

function App() {
  const [_amountInCents, setAmountInCents] = useState(0)
  /* there are external libraries for translation, without a library I just implemented basically.
    I just stored the language variable in the localStore for consistency, didn't implement the library*/
  const [language, setLanguage] = useState<TLanguage>(getLocalLang())

  // disable and error is handled here since these created only for demonstration,
  // they are not related to the logic of component
  const { isDisabled, toggleDisable } = useDisable()
  const { hasError, toggleError } = useHasError()

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    localStorage.setItem('language', e.target.value)
    // set lang is used to trigger the rerender
    setLanguage(e.target.value as TLanguage)
  }

  const moneyInputProps = {
    locale: language,
    setAmountInCents: setAmountInCents,
    isDisabled: isDisabled,
    hasError: hasError,
  }

  return (
    <div className={_styles.container}>
      <select onChange={handleLanguageChange} className={_styles.select} defaultValue={language}>
        <option value="en">EN</option>
        <option value="de">DE</option>
      </select>
      <MoneyInput {...moneyInputProps} />

      {/* this part is about the error and disable buttons */}
      <div className={_styles.buttonContainer}>
        <button type="button" onClick={toggleDisable} className={_styles.button}>
          {language === 'en' ? enTranslation.MoneyInput.disableButton : deTranslation.MoneyInput.disableButton}
        </button>
        <button type="button" onClick={toggleError} className={_styles.button}>
          {language === 'en' ? enTranslation.MoneyInput.errorButton : deTranslation.MoneyInput.errorButton}
        </button>
      </div>
    </div>
  )
}

export default App
