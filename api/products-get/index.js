const data = require('../shared/product-data');

module.exports = async function (context, req) {
  // Test123456
  try {
    const products = data.getProducts();
    context.res.status(200).json(products);
  } catch (error) {
    context.res.status(500).send(error);
  }
};