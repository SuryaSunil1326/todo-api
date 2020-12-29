const dbConnection = require('./dbConnection/connection');
const indexRouter = require('./routes/index')

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.use('/task',indexRouter);

const port = process.env.PORT || 3000;

dbConnection.connect((err, dbConnectionResult) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Db connection result -->",dbConnectionResult);
        app.listen(port,()=>{
            console.log("Server listen at port", port);
        });
     }
})


