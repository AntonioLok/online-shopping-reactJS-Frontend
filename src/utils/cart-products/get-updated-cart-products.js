const getUpdatedCartProducts = (cartProducts, product, size, amount, increaseAmount = false) => {
  const { name, price, img } = product;
  let updatedCartProducts = cartProducts.slice(0);
  const productAlreadyAddedIndex = updatedCartProducts.findIndex(
    cartProduct => cartProduct._id === product._id && cartProduct.size === size,
  );
  if (amount === 0) {
    updatedCartProducts.splice(productAlreadyAddedIndex, 1);
    return updatedCartProducts;
  }

  if (productAlreadyAddedIndex !== -1) {
    const updatedProduct = updatedCartProducts[productAlreadyAddedIndex];
    if (increaseAmount) {
      updatedCartProducts[productAlreadyAddedIndex] = {
        ...updatedProduct,
        quantity: updatedProduct.quantity + Number(amount),
      };
    } else {
      updatedCartProducts[productAlreadyAddedIndex] = {
        ...updatedProduct,
        quantity: Number(amount),
      };
    }
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
