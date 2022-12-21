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
<<<<<<< HEAD
	res.sendFile(path.join(__dirname, '../Frontend/', 'index.html'));
=======
	res.sendFile(path.join(__dirname, '../FrontEnd/', 'index.html'));
>>>>>>> main
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

app.get('/task/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const result = await task.getTaskByID(Number(id));
		res.json(result);
	} catch (error) {
		console.log(error);
	}
});

app.post('/task', async (req, res) => {
	try {
		const { header } = req.body;
		const result = await task.createTask(String(header));
		res.json(result);
	} catch (error) {
		console.log(error);
	}
});

app.put('/task/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { header } = req.body;
		const result = await task.updateTask(Number(id), String(header));
		res.json(result);
	} catch (error) {
		console.log(error);
	}
});

app.delete('/task/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const result = await task.deleteTask(Number(id));
		res.json(result);
	} catch (error) {
		console.log(error);
	}
});

app.listen(PORT, function () {
	console.log(`Server listening PORT ${PORT}`);
});
