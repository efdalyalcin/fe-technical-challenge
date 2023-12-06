import { useState } from 'react'

export default function useDisable(initialValue: boolean = false) {
  const [isDisabled, setIsDisabled] = useState(initialValue)

  const toggleDisable = () => setIsDisabled(!isDisabled)

  return { isDisabled, toggleDisable }
}
