const express = require('express');
const app = express();


//config
const dotenv = require('dotenv');
dotenv.config({path:'backend/.env'});


//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})




//server
app.listen(process.env.PORT, () => {
  console.log(`Server is Running on http://localhost:${process.env.PORT}`);
})