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
  getInventoriesForWarehouse,
} = require('../controllers/warehouse-controller');

router.get('/', getAllWarehouses)
router.get('/:id', getWareHouseDetailById);
router.get('/:id/inventories' , getInventoriesForWarehouse)

module.exports = router;