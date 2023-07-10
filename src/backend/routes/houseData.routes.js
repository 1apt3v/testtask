const Router = require('express')
const router = new Router()
const houseDataController = require('../controller/houseData.controller')


router.get('/houseData', houseDataController.getDataPage)
router.get('/housesCount', houseDataController.getCountHouses)
router.get('/houseWithFilterData', houseDataController.getFilteredHouses)


module.exports = router