const {getDatabase} = require('../utils/database');

class Posts {
  //   constructor(id) {
  //     this.id = id;
  //   }

  static getAllPosts() {
    const db = getDatabase();
    return db
      .collection('posts')
      .find().toArray()
    
  }
}

module.exports = Posts;
