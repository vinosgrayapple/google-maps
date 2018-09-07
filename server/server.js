const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const favicon = require('serve-favicon')
const path = require('path')

const db = require('./config/db')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello')
})

const port = 8880
app.use(express.static('public'))
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
// app.use(bodyParser.urlencoded({
//     extended: true
// }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('combined'))

MongoClient.connect(db.url, {
  useNewUrlParser: true
}, (err, db) => {
  if (err) return console.log(err)
  db = db.db('notable')
  require('./app/routes')(app, db)

  app.listen(port, () => {
    console.log(`Listen on http://localhost:${port}`)
  })
})
