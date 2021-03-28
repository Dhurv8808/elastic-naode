const client = require('../connect');

client.delete({
    index: 'users',
    id: '637f2bcc-6616-446f-bce8-3b34eb4b0a24'
  },function(err,resp,status) {
    console.log(err);
  console.log("delete",resp);
});