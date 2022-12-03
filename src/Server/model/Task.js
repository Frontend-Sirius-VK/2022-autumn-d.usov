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
}

module.exports = new Task();
