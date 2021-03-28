const client = require('./connect');

const searchDoc = async function(indexName, mappingType, payload){
  return await client.search({
    index: indexName,
    type: mappingType,
    body: payload
  });
}

module.exports = searchDoc;

async function test(){
  const body = {
    query: {
      match: {
        "full_name": "Dhruv Gupta"
      }
    }
  }
  try {
    const resp = await searchDoc('users', 'user_data', body);
    console.log(resp);

    resp.hits.hits.forEach(function(hit){
      console.log(hit);
    })
  } catch (e) {
    console.log(e);
  }
}


test();