const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Full$Moon@2000',
    database: 'testDB2',
    multipleStatements: 'true'
})

connection.connect((err)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("connection has been created");

    const creationQuery = `create table if not exists students(
        id  INT auto_increment primary key,
        name varchar(20),
        email varchar(20),
        age INT
    )`

    connection.execute(creationQuery, (err)=>{
        if(err){
            console.log(err);
            connection.end();
            return;
        }
        console.log('table created');
    });
});

module.exports = connection;