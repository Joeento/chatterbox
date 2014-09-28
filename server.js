//import classes and setup
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
//var config	   = require('./config.js');
var mongoose   = require('mongoose');

app.use(bodyParser());
app.use(express.static(__dirname + '/app'));


var port = process.env.PORT || 8080;

//mongoose.connect(config.mongoURL);

//add a router
var router = express.Router();



router.route('/groups/:id/posts')
	.get(function(req, res) {
		res.json({'hello':'world'})
	});


app.use('/api', router);

app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});

// Start the server
app.listen(port);
console.log('Running on port: ' + port);
