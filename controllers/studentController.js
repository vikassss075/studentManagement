const connection = require('../utils/db-connection');
const Student = require("../models/students");

const addStudent = async (req, res)=>{
    try{
        const {name, email, age} = req.body;
        const student = await Student.create({
            name:name,
            email: email,
            age: age
        });
        res.status(201).send(`User with name: ${name} is created!`)
    }catch (error) {
        console.error("DETAILED ERROR:", error);
        return res.status(500).json({
            message: 'Unable to make an entry.',
            error: error.message
        });
    }
    
    // const addStudentQuery = "insert into students(name, email, age) values (?,?,?)"

    // connection.execute(addStudentQuery, [name, email, age], (err)=>{
    //     if(err){
    //         console.log(err.message);
    //         return res.status(500).send(err.message);
    //     }

    //     console.log('student added');

    //     res.status(200).send("student created");
    // });
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

const updateStudent = async (req, res)=>{
    try{
        const {id} = req.params;
        const {name} = req.body;

        const student = await Student.findByPk(id);
        if(!student){
            res.status(404).send("User is not found");
        }
        student.name= name;
        await student.save();
        res.status(200).send("User has been updated!")
    }catch(error){
        res.status(500).send("User cannot be updated");
    }
    




    // const getStudentQuery = "update students set name =?, email=? where id = ?"

    // connection.execute(getStudentQuery, [name, email, id], (err)=>{
    //     if(err){
    //         console.log(err.message);
    //         return res.status(500).send(err.message);
    //     }

    //     if(result.affectedRows===0){
    //         res.status(404).send('student not found');
    //     }

    //     res.status(200).send("student updated");
    // });
};

const deleteEntry = async (req,res)=>{
    try{
        const {id} = req.params;
        const student  = await Student.destroy({
            where:{
                id:id
            }
        });

        if(!student){
            res.status(404).send("user is not found");
        }
        res.status(200).send("user is deleted");
    }catch(error){
        console.log(error);
        res.status(500).send("Error encountered while deleting")
    }








    // const deleteQuery = "DELETE from students where id = ?";
    // connection.execute(deleteQuery, [id], (err, result)=>{
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         connection.end();
    //         return;
    //     }
    //     if(result.affectedRows ===0){
    //         res.status(404).send('student not found');
    //         return;
    //     }

    //     res.status(200).send('user deleted');
    // })
}

module.exports ={
    addStudent,
    getStudent,
    getStudentbyID,
    updateStudent,
    deleteEntry
}