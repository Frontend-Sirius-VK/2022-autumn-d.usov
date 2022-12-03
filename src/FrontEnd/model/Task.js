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

const dBConnectionsPG = require('../back-end/connection/DBConnectionPG.js');

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


// export class Task {
// 	constructor() {
// 		this.task = null;
// 	}

// 	fetchData() {
// 		fetch('/getCarSpec')
// 			.then((response) => response.json())
// 			.then((data) => {
// 				this.task = data;

// 				EventBus.emit('getTask', data);
// 			});
// 	}
// }