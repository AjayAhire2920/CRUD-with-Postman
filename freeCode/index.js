 const express = require("express");
 const students = require("./students");
 
 const app = express();

 app.use(express.json());


app.get("/api", function(req, res){
    res.json({
        msg : " API Is Working ..."
    })
});


app.get("/api/students", function(req, res){
    res.json(students)
})

app.post("/api/students", function(req, res){
  
    const user ={
        id : students.length + 1,
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email       
    }
    students.push(user)
    res.json(user)
})


app.put("/api/students/:id", function(req, res){    
    let id = req.params.id
    let  first_name = req.body.first_name
    let last_name = req.body.last_name
    let email = req.body.email  

    const index = students.findIndex(function(student){
        return (student.id == id)
    })

    if(index >= 0){
        const std = students[index]
        std.first_name = first_name
        std.last_name = last_name
        std.email = email
        res.json(std)
    }
    else{
        res.status(404)
    }
  
})


app.delete("/api/students/:id", function(req,res){

    const id = req.params.id;

    const index = students.findIndex(function(student){
        return (student.id == id)
    })

    if(index >= 0){
        const std = students[index]
        students.splice(index , 1)
        res.json(std)
    }
    else{
        res.status(404)
        res.end();
    }
    
})
















 app.listen(3000, function(req, res){
     console.log("Server is Running On port 3000");
 });