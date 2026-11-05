const connection = require('../utils/db-connection');

const addStudent = (req, res)=>{
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
};

const getStudent = (req, res)=>{
    const getStudentQuery = "select * from students"

    connection.execute(getStudentQuery, (err)=>{
        if(err){
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        res.status(200).send("student fetched");
    });
};

const getStudentbyID = (req, res)=>{
    const id = req.params;
    const getStudentQuery = "select * from students where id = ?"

    connection.execute(getStudentQuery, [id], (err)=>{
        if(err){
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        res.status(200).send("student fetched");
    });
};

const updateStudent = (req, res)=>{
    const {id} = req.params;
    const {name, email} = req.body;
    const getStudentQuery = "update students set name =?, email=? where id = ?"

    connection.execute(getStudentQuery, [name, email, id], (err)=>{
        if(err){
            console.log(err.message);
            return res.status(500).send(err.message);
        }

        if(result.affectedRows===0){
            res.status(404).send('student not found');
        }

        res.status(200).send("student updated");
    });
};

const deleteEntry = (req,res)=>{
    const {id} = req.params;
    const deleteQuery = "DELETE from students where id = ?";
    connection.execute(deleteQuery, [id], (err, result)=>{
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            connection.end();
            return;
        }
        if(result.affectedRows ===0){
            res.status(404).send('student not found');
            return;
        }

        res.status(200).send('user deleted');
    })
}

module.exports ={
    addStudent,
    getStudent,
    getStudentbyID,
    updateStudent,
    deleteEntry
}