//path
const path=require('path')
console.log(path.dirname);

//basename
console.log(path.basename(__filename));

//extension
console.log(path.extname(__filename));

//directory
console.log(path.dirname(__filename));
//path object format return
console.log(path.parse(__filename));

//join

console.log(path.join(__dirname,"api","script.js"));

const fs = require('fs');

fs.writeFile("example.txt", "hello node", (err) => {
    if (err) throw err;
    console.log("file created");
});

//read

fs.readFile('example.txt','utf-8',(err,data)=>{
    if (err) throw err;
    console.log('filecontent:',data);
}) 
//update

fs.appendFile('example.txt','\ndata added in file',(err)=>{
    if(err)throw err;
    console.log('file is updated');
})

//delete

fs.unlink('example.txt',(err)=>{
    if(err) throw err;
    console.log('file deleted');
})

//Http modules-(create server in node)
const http = require('http');

http.createServer((req, res) => {
    res.write("hello");
    console.log(req.url);
    res.end();
}).listen(3001, () => console.log('server is running'));
