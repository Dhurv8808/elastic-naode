const client = require('./connect');
const addmappingToIndex = async function(){
  return await client.indices.putMapping({
    index: 'users',
    type: 'user_data',
    include_type_name: true,
    body: {
      properties: {
        full_name: {
          type: "text",
        },
        suggest: {
          type: "completion",
        }
      }
    }
  });
}

module.exports = addmappingToIndex;

// test function to explain how to invoke.
async function test() {
  // const mapping = {
  //   properties: 
  // }
  try {
    const resp = await addmappingToIndex();
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}


test();


