//require the Elasticsearch librray
const elasticsearch = require('elasticsearch');
// instantiate an Elasticsearch client
const client = new elasticsearch.Client({
   hosts: [ 'http://localhost:9200']
});

// client.count({index: 'users'}, function(err,resp,status) {  
//   console.log("constituencies",resp);
// });

module.exports = client;  

// client.cluster.health({},function(err,resp,status) {  
//   console.log("-- Client Health --",resp);
// });

// ping the client to be sure Elasticsearch is up
// client.ping({
//   requestTimeout: 30000,
// },function(error) {
//   // at this point, eastic search is down, please check your Elasticsearch service
//   if (error) {
//     console.error('Elasticsearch cluster is down!');
//   } else {
//     console.log('Everything is ok');
//   }
// });
