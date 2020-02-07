var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID
var Numeral = require('numeral')
var assert = require('assert')

var db

app.use(bodyParser.urlencoded({extended: true}))

// get list data
app.get('/h',(req,res)=>{
	db.collection('tours').find().toArray(function(err,results){
		res.send(results)
	})
})
// insertOne
app.get('/insert',(req,res)=>{
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

// get id list
app.get('/',(req,res)=>{
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

//get single
app.get('/h/:id1',
function(req, res) {
			let id =  ObjectID(req.params.id1)
      db.collection('tours').findOne(
						{_id: id},
						function(error, result){
			               assert.equal(null,error);
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

// postdelete
app.post('/postdelete',(req,res)=>{
	let id =  ObjectID(req.body._id1)
	db.collection('tours').deleteOne(
		{_id: id},
		(err,result)=>{ res.redirect(`/h/${req.body._id1}`) }
	)
})
// postupdate
app.post('/postupdate',(req,res)=>{
	let id =  ObjectID(req.body._id1)
	db.collection('tours').updateOne(
		{_id: id},
		{$set: {tourDescription: req.body.tourDescription1,
						tourPrice: req.body.tourPrice1}},
		(err,result)=>{res.redirect(`/h/${id}`);}
	)
})
//postinsert
app.post('/postinsert',(req,res)=>{
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
app.post('/postsearch',(req,res)=>{
	db.collection('tours').find({tourDescription: req.body.tourDescription}).toArray((err,results)=>{
			res.send(results)
	})
})

MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('learning_mongo')

    app.listen(8080,function() {
        console.log('Express listening to http://localhost:8080')
    })
})
