const express = require('express')
const app = express();
const port = 3000
//middleware
//called next function
app.use((req,res,next) =>{
  console.log("Middleware");
  next();
})
app.use((req,res) =>{
  console.log("2 part");
  res.send("<h1>Hello world :) </h1>");
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
