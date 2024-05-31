const express = require('express')
const router = express.Router();
const {
  getAllInventories,
  getInventoryByID,
} = require('../controllers/inventory-controller');

router.get('/', getAllInventories);
router.get('/:inventoryId', getInventoryByID);

module.exports = router