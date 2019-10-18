const getTotalSingleProductCost = (product) => {
  const {
    price, quantity,
  } = product;
  return Math.round(price * quantity * 100) / 100;
};

export default getTotalSingleProductCost;
