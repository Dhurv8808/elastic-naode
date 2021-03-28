const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors')
// require('./connect')
// require('./createIndex')
// require('./deleteIndex')
// require('./addMappingToIndex')
// require('./insertData')
// const search = require('./suggester')
// require('./search')

// ------------------ n-gram -------------------
// require('./n-gram-tokenizer/create_index')
// require('./n-gram-tokenizer/insertData')
// require('./n-gram-tokenizer/updateDoc')
// require('./n-gram-tokenizer/deleteSpecificDoc')
// require('./n-gram-tokenizer/search')
const search = require('./n-gram-tokenizer/search')

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/search', async (req, res) => {
  try {
    await search.test(req, res);
  } catch (err) {
    res.send(err)
  }
})

/* global Models:writable */
Models = require('./db/models');
// console.log(Models);

app.listen(5000, () => {
  console.log(`App running on port 5000`);
})