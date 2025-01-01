function calculateTotal(items) {
  let total = 0;
  for (let i = 0; i < items.length; i++) {
    total += items[i].price; 
  }
  return total; 
}

const items = [{
  name: "Item 1",
  price: 10
}, {
  name: "Item 2",
  price: 20
}, {
  name: "Item 3",
  price: 30
}];

const total = calculateTotal(items);
console.log(total); // Output: 60