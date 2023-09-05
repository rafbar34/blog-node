const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const user = process.env.MONGO_USER;
const restURL = process.env.MONGO_LINK;
const password = encodeURIComponent(process.env.MONGO_PASSWORD)
const url = `mongodb+srv://${user}:${password}${restURL}`;
let _db;

const mongoConnect = (cb) => {
  MongoClient.connect(url)
    .then((result) => {
      console.log('database has been connected');
      _db = result.db('blog');
      cb(result);
    })
    .catch((err) => {
      console.log(err);

      throw err;
    });
};

const getDatabase = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found';
};

exports.mongoConnect = mongoConnect;
exports.getDatabase = getDatabase;
