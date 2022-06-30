const path = require('path');

const express = require('express');

const router = express.Router();
// route - admin/add-product - GET

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});

// /admin/product - POST
router.post('/product', (req, res) => {
    res.redirect('/');
});

module.exports = router;
