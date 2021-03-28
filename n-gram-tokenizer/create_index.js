const client = require('../connect');
const addmappingToIndex = async function(body){
  return await client.indices.create({
    index: 'users',
    body
  });
}

module.exports = addmappingToIndex;

// test function to explain how to invoke.
async function test() {
  const mapping = {
    "settings": {
      "analysis": {
        "analyzer": {
          "autocomplete": {
            "tokenizer": "autocomplete",
            "filter": [
              "lowercase"
            ]
          },
          "autocomplete_search": {
            "tokenizer": "lowercase"
          }
        },
        "tokenizer": {
          "autocomplete": {
            "type": "edge_ngram",
            "min_gram": 1,
            "max_gram": 10,
            "token_chars": [
              "letter"
            ]
          }
        }
      }
    },
    "mappings": {
		"properties": {
			"full_name": {
				"type": "text",
				"analyzer": "autocomplete",
                "search_analyzer": "autocomplete_search"
			}
		}
	}
  }

  try {
    const resp = await addmappingToIndex(mapping);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}


test();