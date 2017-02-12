var exp = require('express');
var app = exp();
var port = process.env.PORT || 3000;

app.get('/', function(req, res) {
	res.send('Hello world Vinoth !');
});

app.listen(port);
