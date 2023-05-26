const app =require('./app');
const connectDatabase = require('./database/database');

//config
const dotenv = require('dotenv');
dotenv.config({path:'backend/.env'});


//Connect database
connectDatabase();




//server
app.listen(process.env.PORT, () => {
  console.log(`Server is Running on http://localhost:${process.env.PORT}`);
})