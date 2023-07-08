const db = require('./../db')


class HouseDataController {
    async getData(req, res) {
        const data = await db.query(
            `SELECT * FROM flats_data`
        )
        res.json(data.rows)
    }
}


module.exports = new HouseDataController()