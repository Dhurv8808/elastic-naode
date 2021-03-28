const client = require('./connect');

client.indices.delete({index: 'users'},function(err,resp,status) {  
  console.log("delete",resp);
});