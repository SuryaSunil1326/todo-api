const dbQuery = require('../dbConnection/queries');
const task = {};


//method definitions

function createTask(taskDetail) {
    return new Promise((resolve, reject) => {
        dbQuery.createTaskDetail(taskDetail, function (err, result) {
            if (result) {
                resolve(result.ops[0]);
            } else {
                reject();
            }

        });
    });
}

task.addTask = async function addTask(req, res) {
    const taskDetail = {};
    taskDetail.task = req.body.task;
    taskDetail.status = req.body.status;
    taskDetail.taskId = req.body.taskId;
    // console.log("data--->", taskDetail);
    try {
        const task = await createTask(taskDetail);
        return res.json({
            success: true,
            result: task,
            message: "Task Created Successfully !!"
        });
    } catch (err) {
        return res.json({
            success: false,
            error: err
        });
    }
}




module.exports = task;
