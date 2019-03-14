const router = require('express').Router();
const Product = require('../../models/product');
const responseHandler = require('../../utils/response-handler');

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.getProduct(id);

    responseHandler.handleSuccess(res, 200, product[0]);
  } catch (error) {
    responseHandler.handleError(res, 500);
  }
});

// Get products
router.get('/:section/:type', async (req, res) => {
  try {
    const { section, type } = req.params;
    const products = await Product.getProducts(section, type);

    responseHandler.handleSuccess(res, 200, products);
  } catch (error) {
    responseHandler.handleError(res, 500);
  }
});

module.exports = router;
