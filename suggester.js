const client = require('./connect');

const searchDoc = async function(indexName, mappingType, payload){
  return await client.search({
    index: indexName,
    type: mappingType,
    body: payload
  });
}

// module.exports = searchDoc;

async function test(req, res) {
  console.log('===========================================', req.query);
  const body = {
    // "_source": false,
		"suggest": {
			"data" : {
			"prefix" : req.query.search,
			"completion" : {
				"field" : "suggest",
				"skip_duplicates" : true,
				// "fuzzy": { 
				// 	"fuzziness": "AUTO"
				// }
			}
		}
	}
  }
  try {
    const resp = await searchDoc('users', 'user_data', body);
    console.log(resp);

    resp.hits.hits.forEach(function(hit){
      console.log(hit);
    })
    // console.log(res.params);
    res.send(resp)
  } catch (e) {
    console.log(e);
  }
}

// test()
exports.test = test;