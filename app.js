// Express webserver Listener setup
const express=require('express');
const app=express();
app.listen(3000);

//"get" represents HTTP GET request
//
app.get('/', (req, res) => {
	// console.log(req); //prints request object from client browser (or other request point). Very big object
	// console.log(req.socket); //prints many details from socket
	// console.log(req.socket.localAddress);
	res.send("<h1>Hello Express</h1><p>IP: "+req.socket.localAddress+"</p>");
});