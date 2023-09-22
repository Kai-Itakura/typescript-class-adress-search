const addTax = (price: number, tax?: number): number => {
  tax ||= 10
  return Math.round(price * (1 + tax / 100))
}

console.log(addTax(520, 10))
console.log(addTax(10520, 20))
console.log(addTax(93493410))
