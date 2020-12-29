const express = require('express');
const router = express.Router();
const taskServices = require('../management/taskManagement');



router.post('/addTask', (req, res) => {
    console.log("request body ===>", req.body);
    taskServices.addTask(req,res);

});

module.exports = router;


// localhost:3000/task/addtask