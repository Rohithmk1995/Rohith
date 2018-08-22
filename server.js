const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/dist/Resume'));

app.listen(process.env.PORT || 8080);

app.get('*', function(req, res){
    const index = path.join(__dirname, 'dist/Resume','index.html');
    console.log("Reading " + index);
    res.sendFile(index);
});

console.log("Welcome To my page!!");