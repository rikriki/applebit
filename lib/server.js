var program = require('commander');

var express = require('express'),
	app = express(),
	_ = require('lodash');

program
	.version('1.0.0')
	.option('-p, --port <n>', 'App Port (default "3000")', parseInt)
	.option('-c --config [config]','Config file location','js/config.js')
	.parse(process.argv)


console.log('FUCK YOU')
app.use(require('compression')());
app.use(require('serve-static')(__dirname));

app.get('js/config.js',function(req,res){
	res.sendfile(__dirname + '/' + program.config);
});

app.get('*', function(req, res){
	console.log(req.url);
	// Check if this is a direct file request
	if (req.url.match(/^[^\?]*\.[^\?\.]*$/) && req.url != 'index.html') {
		// There's a . in the path, we've likely been asked for a file
		res.status(404).send(req.url + ' not found');
		return;
	}
	res.sendfile(__dirname +  '/index.html');
});
console.log('App listen to ',program.port || 3000 )
app.listen(program.port || 3000);
