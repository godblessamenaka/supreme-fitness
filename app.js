var express = require("express");
var app = express();
const serve   = require('express-static');
var router = express.Router();
var path = __dirname + '/views/';


app.use(serve(__dirname + '/public'));

router.use(function (req,res,next) {
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/about",function(req,res){
  res.sendFile(path + "about.html");
});

router.get("/contact",function(req,res){
  res.sendFile(path + "contact.html");
});

router.get("/services",function(req,res){
  res.sendFile(path + "services.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "error.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
