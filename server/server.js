const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const {db, port} = require('./config');
const searchRouter = require('./routes/searchRouter');
const resultsRouter = require('./routes/resultsRouter');

// create the express app
const app = express();

mongoose.Promise = global.Promise;

//connecting to the db
mongoose.connect(db, {
    useMongoClient: true
}, function (err) {
    if (err) throw err;
    else console.log("Successfully Connected To DB")

});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/../build/index.html'));
});

// use express middlewares
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({type: '*/*'}));
app.use("/", express.static(path.join(__dirname, '/../build')));

searchRouter(app);
resultsRouter(app);

// starting the server
app.listen(process.env.PORT || port, function () {
    console.log('The server is running on ' + port)
});
