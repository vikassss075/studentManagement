const connection = require('../utils/db-connection');

const addStudent = ((req, res)=>{
    const {name, email, age} = req.body;
    const addStudentQuery = "insert into students(name, email, age) values (?,?,?)"

    connection.execute(addStudentQuery, [name, email, age], (err)=>{
        if(err){
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        console.log('student added');

        res.status(200).send("student created");
    });
});

const getStudent = ((req, res)=>{
    const getStudentQuery = "select * from students"

    connection.execute(getStudentQuery, (err)=>{
        if(err){
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        res.status(200).send("student fetched");
    });
});

const getStudentbyID = ((req, res)=>{
    const id = req.params;
    const getStudentQuery = "select * from students where id = ?"

    connection.execute(getStudentQuery, [id], (err)=>{
        if(err){
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        res.status(200).send("student fetched");
    });
});

module.exports ={
    addStudent,
    getStudent,
    getStudentbyID
}