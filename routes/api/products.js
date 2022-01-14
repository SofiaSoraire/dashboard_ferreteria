const express = require('express');
const router = express.Router();

const usersAPIController = require('../../controller/api/productsAPIController');

router.get('/',usersAPIController.list);
router.get('/:id',usersAPIController.detail);

module.exports = router;