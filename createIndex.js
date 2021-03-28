const client = require('./connect');

const createIndex = async function(indexName) {
  return await client.indices.create({
    index: indexName
  });
}

async function test(){
  try {
    const resp = await createIndex('users');
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}
test();
  
module.exports = createIndex;