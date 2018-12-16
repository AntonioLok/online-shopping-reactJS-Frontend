const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  section: String, // men, women, babies, etc.
  type: String, // jacket, undies, suits, etc.
  img: String,
  sizeAvailable: Array,
});

productSchema.statics.getProducts = (callback) => {
  productModel.find({}, (err, products) => {
    if (err) {
      return callback(err);
    }
    return callback(null, products);
  });
};

productSchema.statics.getProduct = (id, callback) => {
  productModel.findById(id, (err, products) => {
    if (err) {
      return callback(err);
    }
    return callback(null, products);
  });
};

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
