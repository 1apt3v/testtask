const Router = require('express')
const router = new Router()
const houseDataController = require('../controller/houseData.controller')


router.get('/houseData', houseDataController.getData)
router.get('/housesCount', houseDataController.getCountHouses)


module.exports = router