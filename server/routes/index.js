
var express = require('express')
var router = express.Router()
var Numeral = require('numeral')
var MongoClient = require('mongodb').MongoClient
var path = require('path')
var db
MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('learning_mongo')
})

// react (home)
router.get('/',function(req,res){
  res.sendFile(path.resolve(__dirname,'../public/react.html'))
})

router.get('/table',function(req,res){
  res.sendFile(path.resolve(__dirname,'../public/react.html'))
})

router.get('/about',function(req,res){
  res.sendFile(path.resolve(__dirname,'../public/react.html'))
})

module.exports = router
