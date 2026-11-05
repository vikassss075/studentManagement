const express = require('express');
const app = express();
app.use(express.json());

const db = require('./utils/db-connection');
const studentRouter = require('./routes/studentRoutes');

app.use('/students', studentRouter);

app.listen(3000);