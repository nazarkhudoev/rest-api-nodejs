require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Databse'))

app.use(express.json())

const subsriberRouter = require('./routes/subscribers')
app.use('/subscribers', subsriberRouter)
//'localhost:300/subscribers/some'

app.listen(3000, () => console.log('Server started'))