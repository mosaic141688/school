var mongoose = mongoose||require('mongoose');
var url='localhost:27017/school';
var connect = function () {
    mongoose.connect(url);
};
connect();
var db = mongoose.connection;
db.on('error', function(error){
    console.log("Error loading the db - "+ error);
});
db.on('disconnected', connect);
