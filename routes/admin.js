const express = require('express');
const router = express.Router();
//route - admin/add-product - GET

router.get('/add-product',(req,res) =>{
  res.send('<form action="/admin/product" method="POST"><label for="product">Product:</label><input type="text" name="product"><label for="price">Price:</label><input type="number" name="price"><button type="submit">Add product</button></form>');
});

// /admin/product - POST
router.post('/product' , (req,res)=>{
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
