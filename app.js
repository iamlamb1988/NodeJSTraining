// Express webserver Listener setup (bare minimum)
const express=require('express');
const app=express();
app.listen(3000);

//additional nodejs modules
const path=require('path');

//Globals
//no globals

app.set('view engine','ejs'); //this enables scriptlets to execute in the .ejs files
app.set('views', path.join(__dirname, './web/views')); //will set the render to look for files in this directory
app.use(express.urlencoded({ extended: false })); //allows access to POST variables

//"get" represents HTTP GET request
app.get('/', (req,res) => {
	// console.log(req); //prints request object from client browser (or other request point). Very big object
	// console.log(req.socket); //prints many details from socket
	// console.log(req.socket.localAddress);
	res.render('home');
});

app.post('/', (req,res) => {
	res.render('home',{postVarx: req.body.tag});
});

app.get('/about', (req,res) => {
	res.render('about');
});

app.get('/login', (req,res) => {
	res.render('login');
});