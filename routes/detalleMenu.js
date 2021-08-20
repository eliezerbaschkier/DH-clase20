var express = require('express');
var router = express.Router();
const detalleMenuController = require('../controllers/detalleMenuController')

/* GET home page. */
router.get('/detalle/id', detalleMenuController.detalle);

module.exports = router;