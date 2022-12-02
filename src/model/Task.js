// import { DBConnectionsPG } from '../connection/DBConnectionPG.js';

// export class Task {
// 	async getAllTasks() {
// 		try {
// 			const result = await new DBConnectionsPG().getConnections().query(
// 				'SELECT * FROM tasks'
// 			);
// 			return result.rows;
// 		} catch (error) {
// 			console.log(error);
// 		}
// 	}
// }

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
