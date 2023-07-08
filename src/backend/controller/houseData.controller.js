const db = require('./../db')


class HouseDataController {
    async getData(req, res) {
        const data = await db.query(
            `SELECT * FROM flats_data`
        )
        res.json(data.rows)
    }


    async getDataPage(req, res) {
        const maxElement = 8
        let page = req.query.page - 1
        if(page > 0) {
            page *= maxElement
        }
        const data = await db.query(
            `SELECT * FROM flats_data ORDER BY id ASC LIMIT 8 OFFSET ${page}`
        )
        res.json(data.rows)
    }


    async getCountHouses(req, res) {
        const count = await db.query(
            `SELECT COUNT(id) FROM flats_data;`
        )
        res.json(count.rows)
    }
}


module.exports = new HouseDataController()