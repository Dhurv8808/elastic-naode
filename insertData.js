const Models = require('./db/models');
const client = require('./connect');

const insertDoc = async function(indexName, _id, mappingType, data) {
  return await client.index({
    index: indexName,
    type: mappingType,
    id: _id,
    body: data
  });
}

module.exports = insertDoc;


async function test() {
  try {
    const data = await Models.User.findOne({  
      attributes: [...attributes()],
      where: { id: '15b4910d-ed3e-404c-9f79-67d034119114' }
    });
    const parsedData = data.get({ plane: true });
    console.log(parsedData);
    const body = {
      full_name: parsedData.full_name,
      suggest: {
        input: [parsedData.first_name, parsedData.last_name]
      }
    }
    const resp = await insertDoc('users', parsedData.id, 'user_data', body);
    console.log(resp);
  } catch (e) {
    console.log(e);
  }
}

const attributes = () => {
  return ['id', 'full_name', 'first_name', 'last_name']
}

test()
