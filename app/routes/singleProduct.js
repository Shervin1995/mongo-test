var express = require('express')
var router = express.Router()
var ObjectID = require('mongodb').ObjectID
var MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('learning_mongo')
})

//get single
router.get('/h/:id1',
function(req, res) { 
			let id =  ObjectID(req.params.id1)
      db.collection('tours').findOne(
						{_id: id},
						function(error, result){
			               //assert.equal(null,error);
										 if (!result) {
										 	res.send(`
												<h2>no result!</h2>
												<a href="/">Back home!</a>
												`)
										 } else {
			               res.send(`
													<h3>tourPrice: ${result.tourPrice}</h3>
		 											<h3>Description: </h3>
													<p>${result.tourDescription}</p>
													<hr>
													<form action="/postdelete" method="post">
											    <input type="text" name="_id1" value=${id} hidden>
											    <input type="submit" value="delete this!">
											    </form>
													<hr>
													<form action="/postupdate" method="post">
											    <input type="text" name="_id1" value=${id} hidden>
													tourPrice:<br>
												 <input type="text" name="tourPrice1"
												 placeholder=${result.tourPrice}><br>
													tourDescription:<br>
													<input type="text" name="tourDescription1"
													placeholder=${result.tourDescription} ><br><br>
											      <input type="submit" value="update!">
											    </form>
											 `);
 										 } // else ends here
							})
})


module.exports = router
