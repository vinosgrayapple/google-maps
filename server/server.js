const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')
// console.log(db)
const app = express()


app.get('/', (req, res) => {
    res.send('Hello')
})

const port = 8080;
app.use(bodyParser.urlencoded({
    extended: true
}));

MongoClient.connect(db.url, {
    useNewUrlParser: true
}, (err, db) => {
    if (err) return console.log(err);
    db = db.db('notable')
    require('./app/routes')(app, db)

    app.listen(port, () => {
        console.log(`Listen on http://localhost:${port}`)
    })

})