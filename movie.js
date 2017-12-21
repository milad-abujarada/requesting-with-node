var request = require('request');
var env = require('./env');
console.log(env.key);
module.exports.get = function (movieTitle){
	request( 'https://www.googleapis.com/customsearch/v1?key='+env.key+'&cx='+env.id+'&q='+movieTitle+' movie',
		function(error, response, body){
			let content = JSON.parse(body);
			//console.log(body);
			console.log('Title ', content.queries.request[0].title);
			console.log('Total Results ', content.queries.request[0].totalResults);
		});
};
