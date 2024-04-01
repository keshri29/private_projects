const express = require('express');
const { testController } = require('../controllers/testcontrollers');


//router object

const router = express.Router()

//routes
router.get('/', testController);

//export
module.exports = router;