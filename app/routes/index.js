
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
      <h1 style='color:purple'>Insert!</h1>
      <form id='insertform' action="/api" method="post">
      tourPrice:<br>
     <input id='tourPrice' type="text" name="tourPrice"><br>
      tourDescription:<br>
      <input id='tourDescription' type="text" name="tourDescription">
      <br><br>
        <input type="submit" value="insert">
      </form>
      <hr>
			<h1 style='color:purple'>Show!</h1>
			`
			var length = Numeral(results.length)
				for(let i=0; i<length.value(); i++){
					x += `
					<div>
					<h1 style='color:gray'>NO.${i}</h1>
          <form action="/api/${results[i]._id}" method="post">
          <input style='background-color:red' type="submit" value="Delete!">
          </form>
          <p>_id (mongodb): ${results[i]._id}</p>
          <p>tourPrice: ${results[i].tourPrice}</p>
          <p>Description: </p>
          <p style='color:lightgray'>${results[i].tourDescription}</p>
          <br>

					` }
			res.send(x + `
        <script src="/js/jqueryajax.js"></script>
        <script src="/js/insertAjax.js"></script>
        `)
	}
)
})



module.exports = router
