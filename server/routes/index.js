var express = require('express')
var router = express.Router()
var path = require('path')

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
