var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var ObjectID = require('mongodb').ObjectID
var Numeral = require('numeral')
var MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('learning_mongo')
})

app.use(bodyParser.urlencoded({extended: true}))

app.use(require('./routes/index'))
app.use(require('./routes/api'))
app.use(require('./routes/singleProduct'))

app.listen(8080,function() {
    console.log('Express listening to http://localhost:8080')
})
