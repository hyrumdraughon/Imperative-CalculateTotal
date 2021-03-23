export function calculateTotal (items, tax) {
  tax = Math.abs(tax)

  let total = 0

  for (let item of items) {
    total += (item.price + item.price * tax * item.taxable)
  }
  
  return total
}
