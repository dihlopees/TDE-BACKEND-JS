const express = require('express');

const tasksRoutes = require('./routes/tasks');
const usersRoutes = require('./routes/users');
const healthRoutes = require('./routes/health');
const app = express();

app.use(express.json());
app.use(tasksRoutes.router);
app.use(healthRoutes.router);
app.use(usersRoutes.router);

module.exports = app;
