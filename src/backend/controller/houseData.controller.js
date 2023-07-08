const db = require('./../db')


class HouseDataController {
    async getData(req, res) {
        const data = await db.query(
            `SELECT * FROM flats_data`
        )
        res.json(data.rows)
    }


    // async getDataPage(req, res) {
    //     // console.log(req.body)
    //     const page = req.body.page * 8
    //     const data = await db.query(
    //         `SELECT * FROM flats_data ORDER BY id ASC LIMIT 8 OFFSET ${page}`
    //     )
    //     console.log(data.rows)
    //     // res.json(data.rows)
    // }


    async getCountHouses(req, res) {
        const count = await db.query(
            `SELECT COUNT(id) FROM flats_data;`
        )
        res.json(count.rows)
    }
}


module.exports = new HouseDataController()