var express = require('express')
var router = express.Router()
var ObjectID = require('mongodb').ObjectID
var MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('learning_mongo')
})
// insertOne
router.get('/insert',(req,res)=>{
		res.send(`
				<h1>Add 2 save in database!</h1>
				<a href="/">Back Home</a><br>
				<form action="/postinsert" method="post">
				tourPrice:<br>
			 <input type="text" name="tourPrice1"><br>
				tourDescription:<br>
				<input type="text" name="tourDescription1">
				<br><br>
					<input type="submit" value="save!">
				</form>
			`)
})


// postdelete
router.post('/postdelete',(req,res)=>{
	let id =  ObjectID(req.body._id1)
	db.collection('tours').deleteOne(
		{_id: id},
		(err,result)=>{ res.redirect(`/h/${req.body._id1}`) }
	)
})
// postupdate
router.post('/postupdate',(req,res)=>{
	let id =  ObjectID(req.body._id1)
	db.collection('tours').updateOne(
		{_id: id},
		{$set: {tourDescription: req.body.tourDescription1,
						tourPrice: req.body.tourPrice1}},
		(err,result)=>{res.redirect(`/h/${id}`);}
	)
})
//postinsert
router.post('/postinsert',(req,res)=>{
	db.collection('tours').insertOne(
		// bodyParser helps to read req.body
		req.body,
		// {tourDescription: req.body.tourDescription1, tourPrice: req.body.tourPrice1},
		(err,result)=>{
		if(err) return console.log(err);

		console.log('saved to db!!');
		res.redirect('/')
	})
})
//post search
router.post('/postsearch',(req,res)=>{
	db.collection('tours').find({tourDescription: req.body.tourDescription}).toArray((err,results)=>{
			res.send(results)
	})
})


module.exports = router
