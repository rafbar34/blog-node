const {getDatabase} = require('../utils/database');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
class Posts {
  constructor(id, category) {
    this.id = id;
    this.category = category;
  }

  static getAllPosts() {
    const db = getDatabase();
    return db.collection('posts').find().toArray();
  }
  static getPostById() {
    const db = getDatabase();
    return db
      .collection('posts')
      .find({_id: new ObjectId(this.id)})
      .toArray();
  }
  static getPostsByCategories(category) {
    const db = getDatabase();
    return db.collection('posts').find({category: category}).toArray();
  }
}

module.exports = Posts;
