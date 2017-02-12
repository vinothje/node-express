var exp = require('express');
var app = exp();

app.get('/about', function(req, res) {
	res.send('Hello world!');
});

app.listen(3000);
