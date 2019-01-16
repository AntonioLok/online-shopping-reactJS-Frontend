const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  section: { type: String, enum: ['Men', 'Women', 'Kids', 'Baby'], required: true },
  type: {
    type: String,
    enum: ['Shirts', 'Jeans', 'Pants', 'Jackets & Coats', 'Dresses', 'Knitwear', 'Tops',
      'Skirts', 'Special', 'Newborn', 'Toddler', 'Socks & Accessories'],
    required: true,
  },
  img: { type: String, required: true },
  sizeAvailable: { type: Array, required: true },
});

productSchema.statics.getProduct = (id, callback) => {
  productModel.find({ _id: id }, (err, product) => {
    if (err) {
      return callback(err);
    }
    return callback(null, product);
  });
};

productSchema.statics.getProducts = (section, type, callback) => {
  productModel.find({ section, type }, (err, products) => {
    if (err) {
      return callback(err);
    }
    return callback(null, products);
  });
};

const productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
