
var express = require('express')
var router = express.Router()
var Numeral = require('numeral')
var MongoClient = require('mongodb').MongoClient
var db
MongoClient.connect('mongodb://localhost:27017/',
  function(err,client){
    db = client.db('learning_mongo')
})

// Home
router.get('/',(req,res)=>{
			var x = `
      <h1 style='color:purple'>Insert!</h1>
      <form id='insertform' method="post">
      tourPrice:<br>
     <input id='tourPrice' type="text" name="tourPrice"><br>
      tourDescription:<br>
      <input id='tourDescription' type="text" name="tourDescription">
      <br><br>
        <input type="submit" value="insert">
      </form>
      <hr>
			<h1 style='color:purple'>Show!</h1>

      <div class='showlist'>

      </div>

      <script src="/js/jqueryajax.js"></script>
      <script src="/js/insertAjax.js"></script>
			`

			res.send(x)
})



module.exports = router
