const express = require('express');
const employees = require('./empData.json');
const fs = require('fs');



const app = express(); // web server

//middleware
app.use(express.json());// fetch json data from req object
app.use(express.urlencoded({extended:true})) 

app.get('/',(req,res)=>{
    res.send('Home page');
})

app.get('/about',(req,res)=>{
    res.send('About us page');
})

//show employees data
app.get('/showEmp',(req,res)=>{
    res.json(employees);
})

app.get('/emp/:id',(req,res)=>{
    const id = Number(req.params.id);
    const emp = employees.find((e)=>e.id=== id);
    res.json(emp)

})
//add employee
app.post('/addEmp',(req,res)=>{
    const new_emp = req.body;
    console.log(new_emp);
    employees.push(new_emp);    //
    fs.writeFile('./empData.json',JSON.stringify(employees),(error)=>{
        if (error) {
            res.send('Internal server error..');
        } else {
            res.send("employee data inserted...");
        }
    })
})


app.put('/updateEmp/:id',(req,res)=>{
    const id = Number(req.params.id);
    const emp = req.body;
    const empIndex = employees.findIndex((e)=>e.id===id);
    
    if (empIndex!= -1) {
        employees[empIndex] = emp;    
        fs.writeFile('./empData.json',JSON.stringify(employees),(error)=>{
            if (error) {
                res.send('Internal server error..');
            } else {
                res.send("employee data updated...");
            }
        })
    } else {
        res.send(" no employee found..")
    }
})


app.delete('/delEmp/:id',(req,res)=>{
    const id = Number(req.params.id);
    const emp = req.body;
    const empIndex = employees.findIndex((e)=>e.id===id);
    
    if (empIndex!= -1) {
        employees.splice(empIndex,1);
        fs.writeFile('./empData.json',JSON.stringify(employees),(error)=>{
            if (error) {
                res.send('Internal server error..');
            } else {
                res.send("employee data deleted...");
            }
        })
    } else {
        res.send(" no employee found..")
    }
})

app.listen(4000,()=>{
    console.log('listening....');
})
