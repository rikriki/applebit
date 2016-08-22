var mysql      = require('mysql');
var program = require('commander');
var bodyParser = require('body-parser');
var config = require('./../config');
var express = require('express'),
	app = express(),
	_ = require('lodash');

program
	.version('1.0.0')
	.option('-p, --port <n>', 'App Port (default "3000")', parseInt)
	.option('-c --config [config]','Config file location','js/config.js')
	.parse(process.argv)



var local ={
  host     : config.host,
  user     : config.user,
  password : config.password,
  database : config.database,
}
var connection = mysql.createConnection(local)

connection.connect();



var router = express.Router();

router.get('/',function(req,res){
	res.json({message:"soory"})
});

router.route('/:foo')
	.post(function(req,res){
		postData(req.body,function(result){
			res.json({data:result})
		})
		
	})
	.get(function(req,res){
		var module = req.params.foo;
		getData(module,{},function(result){
			res.json({data:result})
		})
		
	})

router.route('/:module/:data_id')
	.post(function(req,res){
		postData(req.body,function(result){
			res.json({data:result})
		})
		
	})
	.get(function(req,res){
		var module = req.params.module;

		
		getData(module,{id:req.params.data_id},function(result){
			res.json({message:result})
		})
		
	})

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next()

})

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api',router)

app.use(require('compression')());
app.use(require('serve-static')(__dirname));

console.log('App listen to ',program.port || 3001 )
app.listen(program.port || 3001);


var postData = function(data,cb){
	console.log(data,"asdasasdasd")
	var query = connection.query('INSERT INTO gospels SET ?', data, function(err, result) {
	    if (err)
	        cb(err)
	    console.log(err,"result")
	    if(result.message.affectedRows){
	    	cb('success')
	    }else{
	    	cb('error')
	    }
	})
}

var getData = function(module,options,cb){
	
	if(!_.isEmpty(options)){
		
		var query = connection.query('SELECT * FROM ?? WHERE id=?', [module,options.id], function(err,result){
			next2(err,result);
		})
	}else{
		var query = connection.query('SELECT * FROM '+ module,  function(err,result){
			var result = _.orderBy(result,'id','desc')
			next2(err,result);
		})
	}
	

	function next2(err,result) {
		if (err){
	        cb(err)
	    }
	    if(result){
	    	cb(result)
	    }else{
	    	cb('error')
	    }
	}
}
