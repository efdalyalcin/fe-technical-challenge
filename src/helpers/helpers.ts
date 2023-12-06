// there could be more files in the folder, but for this small project it would make structure more complicated

// this only lets to input numbers and a dot, you can add 2 digits after dot.
export const numbersRegex = /^[0-9]*\.?([0-9]{1,2})?$/

export function formatEuro(value: string): string {
  const numberValue: number = parseFloat(value) * 100
  return numberValue ? (numberValue / 100).toFixed(2) : '0.00'
}

export function convertToCents(value: string) {
  const numberValue: number = parseFloat(value) * 100
  console.log('new input value ===> ', numberValue)
  return numberValue
}
