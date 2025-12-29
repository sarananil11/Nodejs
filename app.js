console.log("hello saran");
const { log } = require("console");
const fs = require("fs");
const { text } = require("stream/consumers");

// fs.mkdir("myFolder", (err) => {
//   if (err) throw err;
//   console.log("created");
// });

// fs.writeFile("myFolder/text.txt","hello bro!!!",(err)=>{
//     if(err) throw err;
//     console.log("Data added")
// })

// fs.appendFile("myFolder/text.txt","\nsugam",(err)=>{
//    if(err) throw err; 
//     console.log("Data added")
// })



// here, data is used to store the data in the text file and then the data is called in console. 
// utf8 is used to convert the buffer code to string

// fs.readFile("myFolder/text.txt",'utf8',(err,data)=>{
//     if(err) throw err;
//     console.log(data);
    
// })

// fs.unlink("myFolder/text.txt",(err)=>{
//     if(err) throw err;
//     console.log("file deleted");
    
// })

// fs.rmdir("myFolder",(err)=>{
//     if(err) throw err;
//     console.log("file delted");
    
// })
// fs.mkdir("core_Modules", (err) => {
//   if (err) throw err;
//   console.log("created");
// });


// fs.writeFile("core_Modules/text.txt","",(err)=>{
//     if (err) throw err;
//     console.log("file created");
    
// })

// fs.appendFile("core_Modules/text.txt","hahahahaha\nwhy so serious",(err)=>{
//     if (err) throw err;
//     console.log("appended");
    
// })