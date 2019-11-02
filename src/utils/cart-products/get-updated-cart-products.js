const getUpdatedCartProducts = (cartProducts, product, size, amount) => {
  const { name, price, img } = product;
  let updatedCartProducts = cartProducts.slice(0);
  const productAlreadyAddedIndex = updatedCartProducts.findIndex(
    cartProduct => cartProduct._id === product._id && cartProduct.size === size,
  );
  if (productAlreadyAddedIndex !== -1) {
    updatedCartProducts[productAlreadyAddedIndex].quantity += Number(amount);
  } else {
    updatedCartProducts = updatedCartProducts.concat(
      [{
        _id: product._id, size, quantity: Number(amount), name, price, img,
      }],
    );
  }
  return updatedCartProducts;
};

export default getUpdatedCartProducts;
