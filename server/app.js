var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var ObjectID = require('mongodb').ObjectID
var Numeral = require('numeral')
var MongoClient = require('mongodb').MongoClient
var path = require('path')
var db
MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('learning_mongo')
})


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('server/public'))

app.use(require('./routes/index'))
app.use(require('./routes/api'))
// err 404
app.use(function (req, res, next) {
  res.status(404).sendFile(path.resolve(__dirname,'public/react.html'))
})

app.listen(8080,function() {
    console.log('Express listening to http://localhost:8080')
})
