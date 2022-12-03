require('dotenv').config();

// export class DBConnectionsPG {
// 	getConnections() {
// 		const { Pool } = require('pg');
// 		const pool = new Pool({
// 			user: process.env.POSTGRES_USER,
// 			password: process.env.POSTGRES_PASSWORD,
// 			host: process.env.POSTGRES_HOST,
// 			port: process.env.POSTGRES_PORT,
// 			database: process.env.POSTGRES_DB,
// 		});
// 		return pool;
// 	}
// }

class DBConnectionsPG {
	getConnections() {
		const { Pool } = require('pg');
		const pool = new Pool({
			user: process.env.POSTGRES_USER,
			password: process.env.POSTGRES_PASSWORD,
			host: process.env.POSTGRES_HOST,
			port: process.env.POSTGRES_PORT,
			database: process.env.POSTGRES_DB,
		});
		return pool;
	}
}

module.exports = new DBConnectionsPG();
