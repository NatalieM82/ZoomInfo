var fs = require("fs");
var url = require('url');
var express = require ('express');
var app = express();
var Client = require('node-rest-client').Client;
client = new Client();

app.use("/", express.static("./public"));


app.get('/getStatus', function(req, res) {
   client.get("https://status.github.com/api/messages.json", function(data, response){
      console.log(data);
      res.json(data);
   });
});

app.listen(process.env.PORT || 3000);
console.log('listening on port 3000');