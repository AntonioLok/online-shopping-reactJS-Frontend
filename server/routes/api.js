const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product');
const User = require('../models/user');

const router = express.Router();

mongoose.connect('mongodb://user123:user123@ds135704.mlab.com:35704/shopping_site', { useNewUrlParser: true });
const dbconnection = mongoose.connection;

// Handle mongo error
dbconnection.on('error', console.error.bind(console, 'connection error:'));
dbconnection.once('open', () => {
  console.log('We are connected');
});

// Get product
router.get('/products/:id', (req, res) => {
  const { id } = req.params;
  Product.getProduct(id, (err, product) => {
    if (err) {
      res.json({ success: false, data: [], error: err });
    } else {
      res.json({ success: true, data: product[0] });
    }
  });
});


// Get products
router.get('/products/:section/:type', (req, res) => {
  const { section, type } = req.params;
  Product.getProducts(section, type, (err, products) => {
    if (err) {
      res.json({ success: false, data: [], error: err });
    } else {
      res.json({ success: true, data: products });
    }
  });
});

// Get check if email is alredy created
router.get('/emails/:userEmail', (req, res) => {
  const { userEmail } = req.params;
  User.getEmail(userEmail, (err, email) => {
    if (err) {
      res.json({ success: false, data: [], error: err });
    } else {
      // eslint-disable-next-line no-lonely-if
      if (email.length === 0) {
        res.json({ success: true, emailFound: false });
      } else {
        res.json({ success: true, emailFound: true });
      }
    }
  });
});

router.post('/sign-up', (req, res) => {
  const user = new User({ username: req.body.email.toLowerCase() });
  user.password = user.generateHash(req.body.password);
  user.save((err) => {
    if (err) {
      if (err.code === 11000) {
        res.json({ success: false, errorCode: 409 });
      } else {
        res.json({ success: false, errorCode: 500 });
      }
    } else {
      res.json({ success: true, message: 'Acount registered!' });
    }
  });
});

module.exports = router;
