// define a new file to store routes for inventories & warehouse
// instantitate the express.Router
//use router to define routes
// export the routes to be used in another file

const express = require('express');
const knex = require('knex')(require('../knexfile'));
const router = express.Router();
const {
  getAllWarehouses,
  getWareHouseDetailById,
} = require('./controllers/warehouse-controller');
// app.use(express.json());

// const getAllWarehouses = async() => {
//   try {
//     const warehouses = await knex('warehouses');
//     console.log(warehouses)
//   } catch (error) {
    
//   }
// }

router.get('/', getAllWarehouses)
router.get('/:id', getWareHouseDetailById);

module.exports = router;