const pool = require("../config/db");

// create post table
const createPostTable = async () => {
  try {
    const sql = `CREATE DATABASE IF NOT EXISTS sql_flight; USE sql_flight; CREATE TABLE IF NOT EXISTS posts (id INT AUTO_INCREMENT PRIMARY KEY, title VARCHAR(255) NOT NULL, body TEXT NOT NULL, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
    const res = await pool.query(sql);
    if (res[0].affectedRows === 1) {
      console.log("Post table created");
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = createPostTable();

// Another way to create a table is to use the following code:
class Post {
  constructor(title, body) {
    this.title = title;
    this.body = body;
  }

  async save() {
    try {
      let d = new Date();
      //   let date = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
      const sql = `INSERT INTO posts (title, body) VALUES (?, ?)`;
      const [newPost, _] = await pool.query(sql, [this.title, this.body]);
      console.log("Post created");
      return newPost;
    } catch (err) {
      console.log(err);
    }
  }

  static async fetchAll() {
    try {
      const sql = `SELECT * FROM posts`;
      const posts = await pool.query(sql);
      return posts[0];
    } catch (err) {
      console.log(err);
    }
  }
  static async findById(id) {
    const sqlQuery = `SELECT * FROM posts WHERE id = ?`;
    const post = await pool.query(sqlQuery, [id]);
    return post[0];
  }
}

exports = Post;
