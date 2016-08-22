module.exports = function(grunt) {

	'use strict';

	require('matchdep').filterDev('grunt-!(cli)').forEach(grunt.loadNpmTasks);

	var Path = require('path');
	var fs = require('fs');
	var _ = require('lodash');
	
	grunt.initConfig({
		connect: {
	      server: {
	        options: {
	          port: 9001
	        }
	      }
	    },
		watch: {
			options: {
		        livereload: true
		      },
			css: {
				//files: ['lib/client/templates/**/*.hbs','lib/client/css/**/*.less', 'lib/client/js/**/*.js','lib/shared/**/*.js','!lib/client/js/dist.js','!lib/client/js/css_vars.js'],
				files: ['lib/js/**/*.js','lib/js/templates/*.hbs','lib/js/*.js','!lib/js/dist.js','!lib/js/css_vars.js'],
				tasks: ['build'],
			},
		},
		// less: {
		// 	main: {
				
		// 		files: {
		// 			'css/style.css': 'lib/css/style.less'
		// 		}
		// 	},
		// },
		sass: {                              // Task
		    dist: {                            // Target
		      options: {                       // Target options
		        style: 'expanded'
		      },
		      files: {                         // Dictionary of files
		        'lib/css/style.css': 'lib/css/style.scss'      // 'destination': 'source'
		        
		      }
		    }
		},

		
		browserify: {
			dist: {
				browserifyOptions: {
			         debug: true
			     },
				files: {
					'lib/js/dist.js': ['lib/js/**/*.js', '!lib/js/dist.js']
				}
			}
		}

	});
	//grunt.registerTask('default', ['less:main','less:diagram', 'less2js','browserify']);
	grunt.registerTask('build', ['sass:dist','browserify']);
	grunt.registerTask('sync', ['build','connect', 'watch']);

}
