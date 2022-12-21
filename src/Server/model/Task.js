const dBConnectionsPG = require('../connection/DBConnectionPG');

class Task {
	async getAllTasks() {
		try {
			const result = await dBConnectionsPG
				.getConnections()
				.query('SELECT * FROM tasks');
			return result.rows;
		} catch (error) {
			console.log(error);
		}
	}

	async switchingStatusTaskByIDAndStatus(id, status) {
		try {
			const result = await dBConnectionsPG
				.getConnections()
				.query('UPDATE tasks SET is_done = $1 WHERE id = $2', [status, id]);
			return result.rows;
		} catch (error) {
			console.log(error);
		}
	}

	async switchingStatusTaskByID(id) {
		try {
			const status = await dBConnectionsPG
				.getConnections()
				.query('SELECT is_done FROM tasks WHERE id = $1', [id]);
			const tempResult = await dBConnectionsPG
				.getConnections()
				.query('UPDATE tasks SET is_done = $1 WHERE id = $2', [
					!status.rows[0].is_done,
					id,
				]);
			const result = await dBConnectionsPG
				.getConnections()
				.query('SELECT * FROM tasks');
			return result.rows;
		} catch (error) {
			console.log(error);
		}
	}

	async getTaskStatusByID(id) {
		try {
			const status = await dBConnectionsPG
				.getConnections()
				.query('SELECT is_done FROM tasks WHERE id = $1', [id]);
		} catch (error) {
			console.log(error);
		}
	}

	async createTask(header) {
		try {
			const result = await dBConnectionsPG
				.getConnections()
				.query('INSERT INTO tasks (header) values ($1);', [header]);
			return result.rows[0];
		} catch (error) {
			console.log(error);
		}
	}

	async getTaskByID(id) {
		try {
			const result = await dBConnectionsPG
				.getConnections()
				.query('SELECT * FROM tasks WHERE tasks.id = $1', [id]);
			return result.rows[0];
		} catch (error) {
			console.log(error);
		}
	}

	async updateTask(id, header) {
		try {
			const result = await dBConnectionsPG
				.getConnections()
				.query('UPDATE tasks SET tasks.header = $1 WHERE tasks.id = $2', [
					header,
					id,
				]);
			return result.rows[0];
		} catch (error) {
			console.log(error);
		}
	}

	async deleteTask(id) {
		try {
			const result = await dBConnectionsPG
				.getConnections()
				.query('DELETE FROM tasks WHERE tasks.id = $1', [id]);
			return result.rows[0];
		} catch (error) {
			console.log(error);
		}
	}
}

module.exports = new Task();
