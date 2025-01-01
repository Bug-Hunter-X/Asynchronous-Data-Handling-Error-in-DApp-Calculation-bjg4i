async function calculateTotalAsync(itemsPromise) {
  try {
    const items = await itemsPromise; // Await the promise resolving to the items array
    let total = 0; 
    for (let i = 0; i < items.length; i++) {
      total += items[i].price;
    }
    return total;
  } catch (error) {
    console.error("Error calculating total:", error);
    return 0; // Or handle the error appropriately
  }
}

const itemsPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve([{
      name: "Item 1",
      price: 10
    }, {
      name: "Item 2",
      price: 20
    }, {
      name: "Item 3",
      price: 30
    }]);
  }, 1000); // Simulate an asynchronous operation
});

calculateTotalAsync(itemsPromise)
  .then((total) => {
    console.log(total); // Output: 60 after 1 second delay
  });