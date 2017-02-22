var express= require("express");
var app=express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));

var db = require('./db');
var Class = require('./class');

io.on("connection",function(socket){
  console.log("SOCKET CONNECTED")
  socket.on("login",(_usr)=>User.login(_usr,callback))
  //Classes
  socket.on("classes-init",(data)=>{
    Class.getClasses({},(res)=>socket.emit("classes",res));
    socket.join("classes");
  })
  socket.on("create-class",cls=>Class.createClass(cls,(_cls)=>io.sockets.in("classes").emit("new-class",_cls)));

  //Classes End
  setInterval(()=>socket.emit("pol","Hello World"),3000);
})

app.use(express.static('static/dist'));

http.listen(3000,()=>console.log("App listening"));
