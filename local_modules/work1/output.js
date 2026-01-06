const result = require('./fs1');

async function run(){
result.createFolder();
result.writeFile();
result.readFile();
result.appendFile();
}
run();