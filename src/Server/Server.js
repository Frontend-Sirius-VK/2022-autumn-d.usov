'use strict';

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const task = require('./model/Task');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));

const PORT = 3000;

app.get('/', async (req, res) => {
	res.sendFile(path.join(__dirname, '.', 'index.html'));
});

app.get('/tasks', async (req, res) => {
	const result = await task.getAllTasks();
	res.json(result);
});

app.get('/login', (req, res) => {
	// TODO
	res.send('Here will be login window');
});

app.listen(PORT, function () {
	console.log(`Server listening PORT ${PORT}`);
});
