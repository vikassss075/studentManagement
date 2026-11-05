const express = require('express');
const app = express();
app.use(express.json());

const db = require('./utils/db-connection');
const studentRouter = require('./routes/studentRoutes');

app.use('/students', studentRouter);

db.sync({force:false}).then(()=>{
    app.listen(3000);
}).catch((err)=>{
    console.log(err);
})

