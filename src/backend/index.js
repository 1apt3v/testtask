const express = require("express")
const cors = require('cors')
const PORT = process.env.PORT || 8080
const houseData = require('./routes/houseData.routes')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/api', houseData)


app.listen(PORT, () => console.log(`Сервер запущен на ${PORT}`))