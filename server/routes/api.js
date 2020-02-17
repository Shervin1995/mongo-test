var express = require('express')
var router = express.Router()
var ObjectID = require('mongodb').ObjectID
var MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('db01')
})


// get
router.get( '/api' , function(req,res){
  db.collection('coll01').find().toArray(function(err,results){
    res.json(results)
  })
})

// del
router.delete('/api/:id1',(req,res)=>{
	let id =  ObjectID(req.params.id1)
	db.collection('coll01').deleteOne(
		{_id: id},
		(err,result)=>{
      if (err){console.log(err)}
      })
    })
})

// insert
router.post('/api',(req,res)=>{
	db.collection('coll01').insertOne(
		req.body,
		(err,result)=>{
		if(err) return console.log(err)
    })
	})
})

// update
router.post('/api/:id2',(req,res)=>{
	db.collection('coll01').updateOne(
		req.body,
		(err,result)=>{
		if(err) return console.log(err)
    })
	})
})



module.exports = router
