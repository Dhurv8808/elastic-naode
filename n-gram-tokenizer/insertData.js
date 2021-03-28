const Models = require('../db/models');
const client = require('../connect');

const insertDoc = async function(indexName, _id, data) {
  return await client.index({
    index: indexName,
    id: _id,
    body: data
  });
}

module.exports = insertDoc;


async function test() {
  try {
    const data = await Models.User.findOne({  
      attributes: [...attributes()],
      where: { id: '637f2bcc-6616-446f-bce8-3b34eb4b0a24' }
    });
    const parsedData = data.get({ plane: true });
    console.log(parsedData);
    const body = {
      full_name: parsedData.full_name,
    }
    const resp = await insertDoc('users', parsedData.id, body);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}

const attributes = () => {
  return ['id', 'full_name', 'first_name', 'last_name']
}

test()
