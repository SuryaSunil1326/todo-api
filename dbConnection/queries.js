var dbObject = require('./connection');
var db = dbObject.getDb;

var queries = {};

queries.createTaskDetail = function createTaskDetail(query, callback) {
    db().collection('tasks').insert(query, function (err, result) {
        callback(err, result);
    });
}



module.exports = queries;



