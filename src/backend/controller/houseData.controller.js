const { Sequelize, DataTypes, Op } = require('sequelize')
const db = require('./../db')
const sequelize = require('./../db')


const FlatsData = sequelize.define('flats_data', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    floor: {
        type: DataTypes.INTEGER,
    },
    pos_on_floor: {
        type: DataTypes.SMALLINT,
    },
    price: {
        type: DataTypes.INTEGER,
    },
    rooms: {
        type: DataTypes.SMALLINT,
    },
    area_total: {
        type: DataTypes.REAL,
    },
    area_kitchen: {
        type: DataTypes.REAL,
    },
    area_live: {
        type: DataTypes.REAL,
    },
    layout_image: {
        type: DataTypes.STRING(255),
    }
}, {
    timestamps: false,
})


class HouseDataController {
    async getData(req, res) {
        const houses = await FlatsData.findAll()
            .then(houses => houses)
            .catch(err => console.log(err));
        // console.log(houses)
        res.json(houses)


        // const allHouses = await FlatsData.findAll()
        // console.log(allHouses)



        // const data = await db.query(
        //     `SELECT * FROM flats_data`
        // )
        // res.json(data.rows)
    }


    async getDataPage(req, res) {
        const maxElement = 8
        let page = req.query.page - 1


        if (page > 0) {
            page *= maxElement
        }

        const data = await FlatsData.findAll({ offset: page, limit: maxElement })
            .then(data => data)
            .catch(err => console.log(err));

        res.json(data)

        // console.log(houses)
        // res.json(houses)



        // const maxElement = 8
        // let page = req.query.page - 1
        // if (page > 0) {
        //     page *= maxElement
        // }
        // const data = await db.query(
        //     `SELECT * FROM flats_data ORDER BY id ASC LIMIT 8 OFFSET ${page}`
        // )
        // res.json(data.rows)
    }


    async getCountHouses(req, res) {
        const count = await FlatsData.count()
            .then(count => count)
            .catch(err => console.log(err));


        // const count = await db.query(
        //     `SELECT COUNT(id) FROM flats_data;`
        // )
        res.json(count)
    }

    async getFilteredHouses(req, res) {
        // console.log('12312', req.query)
        const params = { ...req.query }
        const {
            pricefrom, priceto,
            floorfrom, floorto,
            kitchenareafrom, kitchenareato,
            livingareafrom, livingareato,
            numberofroomsfrom, numberofroomsto,
            totalareafrom, totalareato,
            page,
        } = params


        let queryObj = {}

        console.log(params)

        // Фильтр для цены
        if (pricefrom) {
            queryObj.price = { ...queryObj.price, [Op.gte]: [pricefrom] }
        }
        if (priceto) {
            queryObj.price = { ...queryObj.price, [Op.lte]: [priceto] }
        }

        // Фильтр для количества комнат
        if (numberofroomsfrom) {
            queryObj.rooms = { ...queryObj.rooms, [Op.gte]: [numberofroomsfrom] }
        }
        if (numberofroomsto) {
            queryObj.rooms = { ...queryObj.rooms, [Op.lte]: [numberofroomsto] }
        }

        // Фильтр для этажа
        if (floorfrom) {
            queryObj.floor = { ...queryObj.floor, [Op.gte]: [floorfrom] }
        }
        if (floorto) {
            queryObj.floor = { ...queryObj.floor, [Op.lte]: [floorto] }
        }

        // Фильтр для площади кухни
        if (kitchenareafrom) {
            queryObj.area_kitchen = { ...queryObj.area_kitchen, [Op.gte]: [kitchenareafrom] }
        }
        if (kitchenareato) {
            queryObj.area_kitchen = { ...queryObj.area_kitchen, [Op.lte]: [kitchenareato] }
        }

        // Фильтр для площади жилой зоны
        if (livingareafrom) {
            queryObj.area_live = { ...queryObj.area_live, [Op.gte]: [livingareafrom] }
        }
        if (livingareato) {
            queryObj.area_live = { ...queryObj.area_live, [Op.lte]: [livingareato] }
        }

        // Фильтр для общей площади
        if (totalareafrom) {
            queryObj.area_total = { ...queryObj.area_total, [Op.gte]: [totalareafrom] }
        }
        if (totalareato) {
            queryObj.area_total = { ...queryObj.area_total, [Op.lte]: [totalareato] }
        }

        const maxElement = 8
        let newPage = page - 1

        if (page > 0) {
            newPage *= maxElement
        }

        console.log(queryObj)

        const filteredHouses = await FlatsData.findAndCountAll({
            where: {
                ...queryObj
            },
            offset: newPage,
            limit: maxElement
        })
        // .then(data => console.log(data.count))

        console.log(filteredHouses.count)
        res.json(filteredHouses)


        // let queryToDB = `SELECT * FROM flats_data`
        // if (Object.keys(params).length !== 0) {
        //     queryToDB = queryToDB + ' WHERE'
        // }
        // let flagAnd = false

        // console.log(Object.keys(params))


        // queryToDB = queryToDB + ';'
        // console.log(queryToDB)

        // const data = await db.query(
        //     queryToDB
        // )
    }
}


module.exports = new HouseDataController()