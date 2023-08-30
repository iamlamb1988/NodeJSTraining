const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: '127.0.0.1', 
     user:'bot', 
     password: 'secretnodejs',
     connectionLimit: 5
});

//returns a mariadb connection object
async function testMariaDB() {
	let conn;
	try {
		conn = await pool.getConnection();
		const rows = await conn.query("SELECT * FROM users;");
		console.log(rows);
	}catch (err){
		throw err;
	}finally{
		if(conn) return conn.end();
	}
}