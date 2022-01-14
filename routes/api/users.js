const express = require('express');
const router = express.Router();


const usersAPIController = require('../../controller/api/usersAPIController');


//CRUD
//Create (Register)
router.get('/',usersAPIController.list);
router.get('/:id',usersAPIController.detail);



module.exports = router;