const express = require('express')
const router = express.Router();
// app.use(express.json());
const {getAllInventories} = require('./controllers/inventory-controller')

router.get('/', getAllInventories);

module.exports = router