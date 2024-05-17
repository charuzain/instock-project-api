// define a new file to store routes for inventories & warehouse
// instantitate the express.Router
//use router to define routes
// export the routes to be used in another file

const express = require('express');
const router = express.Router();
app.use(express.json());
router.get('/', (req,res) => {
  console.log("hi")
})


module.exports = router;