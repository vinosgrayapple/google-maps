const ObjectID = require('mongodb').ObjectID
module.exports = function (app, db) {
  app.post('/register', (req, res) => {
    res.send({
      message: ` Hello ${req.body.email} you was registered`
    })
  })
  /* GET from db */
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id
    const details = {
      '_id': new ObjectID(id)
    }
    // console.log(details)
    db.collection('notes').findOne(details, (err, item) => {
      if (err) console.log(err)
      res.send(item)
    })
  })
  /* UPDATE from db */
  app.put('/notes/:id', (req, res) => {
    const id = req.params.id
    const details = {
      '_id': new ObjectID(id)
    }
    const note = {
      text: req.body.body,
      title: req.body.title
    }
    db.collection('notes').updateOne(details, {
      $set: note
    }, (err, item) => {
      if (err) console.log(err)
      res.send(item)
    })
  })
  /* DELETE from db */
  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id
    const details = {
      '_id': new ObjectID(id)
    }
    // console.log(details)
    db.collection('notes').deleteOne(details, (err, item) => {
      if (err) console.log(err)
      res.send(`Note "${id}" deleted!`)
    })
  })
  /* CREATE  in db */
  app.post('/notes', (req, res) => {
    const note = {
      text: req.body.body,
      title: req.body.title
    }
    db.collection('notes').insertOne(note, (err, result) => {
      if (err) console.log(err)
      res.send(result.ops[0])
    })
  })
}
