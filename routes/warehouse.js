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
  addNewWarehouse,
  updateWarehouse,
  deleteWarehouse,
} = require('../controllers/warehouse-controller');

router.get('/', getAllWarehouses)
router.post('/', addNewWarehouse);
router.patch('/:id', updateWarehouse);
router.get('/:id', getWareHouseDetailById);
router.delete('/id', deleteWarehouse);
router.get('/:id/inventories' , getInventoriesForWarehouse)

module.exports = router;