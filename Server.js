'use strict';

const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));

const PORT = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

app.get('/login', (req, res) => {
	// TODO
});

app.listen(PORT, function () {
	console.log(`Server listening PORT ${PORT}`);
});
