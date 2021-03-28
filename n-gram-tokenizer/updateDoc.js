const client = require('../connect');
const Models = require('../db/models');

const updateDoc = async function(indexName, _id, data) {
  return await client.index({
    index: indexName,
    id: _id,
    body: data
  });
}

module.exports = updateDoc;

async function test() {
  try {
    const data = await Models.User.findOne({  
      attributes: ['id'],
      where: { id: '637f2bcc-6616-446f-bce8-3b34eb4b0a24' }
    });
    const parsedData = data.get({ plane: true });
    const body = {
      full_name: 'asdfghjkl'
    }
    const resp = await updateDoc('users', parsedData.id, body);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}

test()