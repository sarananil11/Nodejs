const { log } = require("console");
const http = require("http");

http.createServer(function (req, res) {
    res.write("hello node js");
    res.end(); // if we don't write this line, the site will be loading and won't show.
}).listen(8000, () => {
    console.log("Api is running");

});