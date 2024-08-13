const express = require('express');
const router = express.Router();
const { addPro , getProducts , getProById , deletPro  , updatePro} = require('../Controllers/products.controller')

// add products
router.post('/' , addPro);
// get all products
router.get('/' , getProducts);
// get pro from her id
router.get('/:id' , getProById);
//delete pro
router.delete('/:id' , deletPro);
//update pro
router.put('/:id' , updatePro);

module.exports = router;