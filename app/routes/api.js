var express = require('express')
var router = express.Router()
var ObjectID = require('mongodb').ObjectID
var MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('learning_mongo')
})


// del
router.post('/api/:id1',(req,res)=>{
	let id =  ObjectID(req.params.id1)
	db.collection('tours').deleteOne(
		{_id: id},
		(err,result)=>{
      if (err) {
        console.log(err);
      }
      // res.redirect(`/`)
    }
	)
})

// insert
router.post('/api',(req,res)=>{
	db.collection('tours').insertOne(
		// bodyParser helps to read req.body
		req.body,
    // you can use this instead:
		// {tourDescription: req.body.tourDescription1, tourPrice: req.body.tourPrice1},
		(err,result)=>{
		if(err) return console.log(err);

		// console.log('saved to db!!');
		res.redirect('/')
	})
})

module.exports = router
