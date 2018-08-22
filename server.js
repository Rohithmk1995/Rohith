const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('/dist'));

app.listen(process.env.PORT || 8080);

app.get('/*', function(req, res){
    res.sendFile(path.join('/dist/index.html'));
});