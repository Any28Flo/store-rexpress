const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3000;
// Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// declare a middleware to parse incoming request
app.use(bodyParser.urlencoded({ extended: false }));

// middleware
// called next function
app.use('/', (req, res, next) => {
    next();
});
// routes
// adding filtering paths
app.use('/admin', adminRoutes);
app.use(shopRoutes);

// default route
app.use('*', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
