//Question 3
const http=require('http');
const fs=require ('fs');
const server=http.createServer((req,res)=>{
    res.setHeader("Content-type",'html');
    fs.readFile("./Q3/home.html",(error,data)=>{
        if (error) {
            console.log("error");
        } else {
            res.write(data)
        }
    });
});

server.listen(3000,()=>{
    console.log("Listning");
});