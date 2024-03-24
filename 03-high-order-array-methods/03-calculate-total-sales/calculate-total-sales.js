function calculateTotalSalesWithTax(products, taxRate) {
  const totalProducts = products.reduce(
    (total, currentValue) => total + currentValue.price * currentValue.quantity,
    0
  );

  const taxAmount = (taxRate * totalProducts) / 100;
  const sumWithTax = taxAmount + totalProducts;
  return sumWithTax;
}

module.exports = calculateTotalSalesWithTax;
// const products = [
//   { name: "Apple", price: 0.5, quantity: 10 },
//   { name: "Banana", price: 0.3, quantity: 20 },
//   { name: "Orange", price: 0.6, quantity: 15 },
// ];
