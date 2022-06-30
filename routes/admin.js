const express = require('express');
const router = express.Router();
//route - admin/add-product - GET

router.get('/add-product',(req,res) =>{
  res.send('');
});

// /admin/product - POST
router.post('/product' , (req,res)=>{
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
