const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
//Routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
//declare a middleware to parse incoming request
app.use(bodyParser.urlencoded({extended : false}));

//middleware
//called next function
app.use('/',(req,res,next) =>{
  console.log("Middleware");
  next();
});
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
