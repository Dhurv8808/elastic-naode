const client = require('../connect');

const searchDoc = async function(indexName, payload){
  return await client.search({
    index: indexName,
    body: payload
  });
}

// module.exports = searchDoc;

async function test(req, res) {
  const body = {
    query: {
      match: {
        "full_name": req.query.search
      }
    }
  }
  try {
    const resp = await searchDoc('users', body);
    console.log(resp);

    resp.hits.hits.forEach(function(hit){
      console.log(hit);
    })
    res.send(resp.hits.hits)
  } catch (e) {
    console.log(e);
  }
}

// test();
exports.test = test;