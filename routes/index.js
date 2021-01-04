const express = require('express');
const router = express.Router();
const taskServices = require('../management/taskManagement');



router.post('/addTask', (req, res) => {
    console.log("request body ===>", req.body);
    taskServices.addTask(req,res);

});

router.delete('/deleteTask/:id', (req, res) => {
    console.log("task deleted ===>", req.params);
    taskServices.deleteTask(req, res);

});


module.exports = router;


// localhost:3000/task/deleteTask/123