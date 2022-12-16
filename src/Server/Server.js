'use strict';
require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const task = require('./model/Task');

const app = express();

app.use(morgan('dev'));
app.use(express.static('.'));
app.use(express.json());

const PORT = process.env.APP_PORT || 3000;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../FrontEnd/', 'index.html'));
});

app.get('/tasks', async (req, res) => {
	try {
		const result = await task.getAllTasks();
		res.json(result);
	} catch (error) {
		console.log(error);
	}
});

app.put('/taskStatus/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const result = await task.switchingStatusTaskByID(Number(id));
		res.json(result);
	} catch (error) {
		console.log(error);
	}
});

app.get('/login', (req, res) => {
	// TODO
	res.send('Here will be login window');
});

app.listen(PORT, function () {
	console.log(`Server listening PORT ${PORT}`);
});
