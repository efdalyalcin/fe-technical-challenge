import { useState } from 'react'

export default function useHasError(initialValue: boolean = false) {
  const [hasError, setHasError] = useState(initialValue)

  const toggleError = () => setHasError(!hasError)

  return { hasError, toggleError }
}
