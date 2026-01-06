const fs = require('fs');

function createFolder() {
    fs.mkdir("work_folder", (err) => {
        if (err) throw err;
        console.log("created work folder");
    });
}

function writeFile() {
    fs.writeFile("work_folder/workFile", "Text written succesfully", (err) => {
        if (err) throw err;
        console.log("file created");

    })
}

function appendFile() {
    fs.appendFile("work_folder/workFile", "hahahahaha\nwhy so serious", (err) => {
        if (err) throw err;
        console.log("appended");
    })
}


function readFile() {
    fs.readFile("work_folder/workFile", "utf-8", (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

module.exports = { createFolder, writeFile,readFile , appendFile} // appendToFile