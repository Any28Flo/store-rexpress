const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000
//declare a middleware to parse incoming request
app.use(bodyParser.urlencoded({extended : false}));

//middleware
//called next function
app.use('/',(req,res,next) =>{
  console.log("Middleware");
  next();
});

app.use('/add-product',(req,res) =>{
  res.send('<form action="/product" method="POST"><label for="product">Product:</label><input type="text" name="product"><label for="price">Price:</label><input type="number" name="price"><button type="submit">Add product</button></form>');
});

app.use('/product' , (req,res)=>{
  console.log(req.body);
  res.redirect('/');
});

app.use('/' , (req,res)=>{
  res.send('<h2>Product added</h2>')
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
