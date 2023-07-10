const express = require("express")
const cors = require('cors')
const PORT = process.env.PORT || 8080
const houseData = require('./routes/houseData.routes')

const sequelize = require('./db')

async function checkConnectForDB() {
    try {
        await sequelize.authenticate()
        console.log('Соединение с БД было успешно установлено')
    } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e)
    }
}

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', houseData)


app.listen(PORT, () => console.log(`Сервер запущен на ${PORT}`))

checkConnectForDB()

