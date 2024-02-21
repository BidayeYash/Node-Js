const http =require ("http");
const fs =require ("fs");
const server=http.createServer((req,res)=>{
    res.setHeader('Content-Type','html');
    let path='./Question4/views';

    switch(req.url){
        case'/':
        path+='/index.html';
        break;

        case'/about':
        path+='/about.html';
        break;
        case'/contact':
        path+='/contact.html';
        break;
        default:
            path+='/404.html';
        break; 
    }

    fs.readFile(path,(error,data)=>{
        if (error) {
            console.log("Error");
        } else {
            res.write(data);
            res.end();
        }
    })
    console.log(req.url);
});

server.listen(3001,()=>{
    console.log('Listing on Port');
});
