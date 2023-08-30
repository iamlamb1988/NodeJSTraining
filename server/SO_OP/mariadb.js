const mariadb = require('mariadb');
const pool = mariadb.createPool({
     host: '127.0.0.1', 
     user:'bot', 
     password: 'myPassword',
     connectionLimit: 5
});

//returns a mariadb connection object
function nodetrainDBconn(){
	return null;
}
