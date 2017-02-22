var mongoose=mongoose||require('mongoose');
var db = db||require('./db');

var ClassSchema = new mongoose.Schema({
  name:String,
  sh:String,
  clas:String,
  section:String,
  level:String
})

var Class = mongoose.model("class",ClassSchema);
var _ID = _ID||mongoose.Types.ObjectId;
var createClass = function(cls,callback){
  Class.find(cls,(err,res)=>{
    if(err) return console.log(err);
    if(res.length>0)return callback(null);
    Class.create(cls,(er,re)=>er?console.log(er):callback(re));
  })
}

var getClasses=function(query,callback){
  Class.find(query,(err,res)=>err?console.log(err):callback(res));
}

exports.createClass=createClass;
exports.getClasses=getClasses;
