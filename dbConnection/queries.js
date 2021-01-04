var dbObject = require('./connection');
var db = dbObject.getDb;

var queries = {};

queries.createTaskDetail = function createTaskDetail(query, callback) {
    db().collection('tasks').insert(query, function (err, result) {
        callback(err, result);
    });
}

queries.deleteTaskByTaskId = function deleteTaskByTaskId(query, callback) {
    db().collection('tasks').deleteOne(query, function (err, result) {
        callback(err, result);
    })
}


queries.updateTaskByTaskId = function updateTaskByTaskId(query, dataToUpdate, callback) {
    db().collection('tasks').updateOne(query, { $set: dataToUpdate }, function (err, result) {
        callback(err, result);
    })
}




module.exports = queries;



