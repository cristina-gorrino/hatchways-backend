var express = require('express');
var app = express();

const PORT = 3000;

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});