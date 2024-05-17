const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json())
const cors = require('cors');
app.use(cors());
const PORT = process.env.PORT || 5050;


console.log(PORT);
//Install express
// Require express
// npm i dotenv
//create env file , define envireonment variables
// require('dotenv').config();
// intsall nodemon npm install nodemon --save-dev
// add srcipt: "start" : "nodemon index.js" and run npm start

// In ANOTHER FILE
// define a new file to store routes for inventories & warehouse
// instantitate the express.Router
//use router to define routes
// export the routes to be used in another file

//middlewares
// in order ro be able to send JSOn dada in the request body , we need JSON parsing middleware
// its available to us via express.jsin method
// to enable json parsing , er need to invoke iti n our middleware

//cors
//enable cors npm install cors

// require in routes file const knex = require('knex')(require('../knexfile'));

const inventoryRoutes = require('./routes/inventory.js')
const warehouseRoutes = require('./routes/warehouse.js')

app.use('/inventories', inventoryRoutes)
app.use('/warehouses' , warehouseRoutes)


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})