import express from "express"
const app = express();
import employees from "#db/employees";

app.route("/").get((req, res)=>{
    res.send("Hello employees!")
});

app.route("/employees").get((req, res)=>{
    res.send(employees)
});

app.route("/employees/random").get((req, res)=>{
    const random = Math.floor(Math.random()* employees.length);
    const employee = employees[random]
    if(employee){
        res.send(employee)
    }else{
        res.status(404).send("No employee found")
    }
})

app.route("/employees/:id").get((req, res)=>{
    const id = Number(req.params.id)
    const found = employees.find(employee => employee.id === id)
    if(found){
        res.send(found)
    }else{
        res.status(404).send("No employee with that ID")
    }
});

export default app