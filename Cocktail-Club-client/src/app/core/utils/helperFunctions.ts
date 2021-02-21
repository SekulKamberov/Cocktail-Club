export function getTotalSum(drinks) {
  let total = 0
  for (const dr of drinks) {
    total += dr.price * dr.quantity
  }

  return total
}

export function toLocaleString(date) {
  return new Date(date).toLocaleString()
}

