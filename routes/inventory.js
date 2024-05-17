const express = require('express')
const router = express.Router();
// app.use(express.json());

router.get('/', (req, res) => {
  console.log("inventory route")
})

module.exports = router