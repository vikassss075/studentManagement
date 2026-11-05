const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('testDB2', 'root', 'Full$Moon@2000', {
    host: 'localhost',
    dialect: 'mysql'
});

(async ()=>{
    try{
        
        await sequelize.authenticate();
        console.log("Connection to the Database has been created");
    }catch(error){
        console.log(error);
    }
})();


module.exports = sequelize;









// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Full$Moon@2000',
//     database: 'testDB2',
//     multipleStatements: 'true'
// })

// connection.connect((err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("connection has been created");

//     const creationQuery = `create table if not exists students(
//         id  INT auto_increment primary key,
//         name varchar(20),
//         email varchar(20),
//         age INT
//     )`

//     connection.execute(creationQuery, (err)=>{
//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }
//         console.log('table created');
//     });
// });

// module.exports = connection;