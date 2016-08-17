var mysql      = require('mysql');
var program = require('commander');
var bodyParser = require('body-parser');
// var FileWatch = require('watch');
var express = require('express'),
	app = express(),
	_ = require('lodash');

program
	.version('1.0.0')
	.option('-p, --port <n>', 'App Port (default "3000")', parseInt)
	.option('-c --config [config]','Config file location','js/config.js')
	.parse(process.argv)



var local ={
  host     : 'localhost',
  user     : 'root',
  password : 'rosales1',
  database : 'gospel_reader'
}
var connection = mysql.createConnection(local)

connection.connect();



// var watch=function(dir,options,cb){
// 	var callback=arguments.length===3?cb:options;
// 	var the_options=arguments.length===3?options:{};
// 	the_options=_.assign({},the_options,{ignoreNotPermitted:true,ignoreUnreadableDir:true,ignoreDorFiles:true});
// 	FileWatch.watchTree(dir,the_options,function(filename,curr,prev){
// 		if(_.isObject(filename) && _.isNull(curr) && _.isNull(prev))
// 				return;
// 		callback(filename,curr,prev);
// 	})
// }
// watch('./lib',{
// 			filter:function(filename){
// 				return filename!='lib/plugins';
// 			}
// 		}, function (filename) {
// 			filename = path.relative(__dirname,filename);
// 			var ext = path.extname(filename)
// 			if (ext == '.js' || ext == '.html') {
// 				log('api_runner')(filename + ' changed. Reload pending...');
// 				safe_shutdown();				
// 			}
// 		});

// watch('./lib/api/*')

var router = express.Router();

router.get('/',function(req,res){
	res.json({message:"soory"})
});

router.route('/gospels')
	.post(function(req,res){
		console.log(req.body.verse)
		console.log(req.body.gospel)
	})
	//id verse gospel reg_date
	

app.use('/api',router)

app.use(require('compression')());
app.use(require('serve-static')(__dirname));

console.log('App listen to ',program.port || 3001 )
app.listen(program.port || 3001);




