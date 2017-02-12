var exp = require('express');
var app = exp();
var port = process.env.PORT || 3000;

app.get('/about', function(req, res) {
	res.send('Hello world!');
});

app.listen(port);
