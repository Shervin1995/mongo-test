
var express = require('express')
var router = express.Router()
var Numeral = require('numeral')
var MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('learning_mongo')
})
// get id list (Home page)
router.get('/',(req,res)=>{
	db.collection('tours').find().toArray(function(err,results){
			var x = `
			<h2>Search in database!</h2>
			<form action="/postsearch" method="post">
			Tour Description:<br>
		 <input type="text" name="tourDescription">
			<br><br>
				<input type="submit" value="search!">
			</form>

			<h2>List of ids:</h2>
			<a style="background-color: gold;color: red; text-decoration: none; font-size:20px;
			border: solid 1px red; padding: 5px"
					href="/insert">Add one to list!</a>

			<hr>
			`
			var length = Numeral(results.length)
				for(let i=0; i<length.value(); i++){
					x += `
					<div>
					<h3>product number ${i}:</h3><br>
					<a href="/h/${results[i]._id}">more info</a>
					</div><hr>
					` }
			res.send(x)
	}
)
})



module.exports = router
