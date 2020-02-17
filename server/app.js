var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var path = require('path')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('server/public'))

app.use(require('./routes/index'))
app.use(require('./routes/api'))
// err 404
app.use(function (req, res, next) {
  res.status(404).sendFile(path.resolve(__dirname,'public/react.html'))
})

app.listen(8080,function() {
    console.log('Express listening to http://localhost:8080')
})
