const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const cors = require('cors');
const employeeRoutes = require('./routers/employees');
const projectRoutes = require('./routers/projects');
const taskRoutes = require('./routers/tasks');

mongoose.connect(config.DATABASE_CONNECT_URL, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());
app.options('*', cors());

app.use(`${config.API}/employees`, employeeRoutes);
app.use(`${config.API}/projects`, projectRoutes);
app.use(`${config.API}/tasks`, taskRoutes);

app.listen(config.PORT, err => {
    console.log('Đang chạy trên http://localhost:' + config.PORT);
})
