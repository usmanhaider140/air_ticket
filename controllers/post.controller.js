const pool = require("../config/db");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const sql = `INSERT INTO posts (title, body) VALUES (?, ?)`;
    await pool.query(sql, [title, body]);
    res.status(201).json({ message: "Post created" });
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const sql = `SELECT * FROM posts`;
    const posts = await pool.query(sql);
    res.status(200).json(posts[0]);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const sqlQuery = `SELECT * FROM posts WHERE id = ?`;
    const post = await pool.query(sqlQuery, [id]);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};

exports.updatePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    const sqlQuery = `UPDATE posts SET title = ?, body = ? WHERE id = ?`;
    const post = await pool.query(sqlQuery, [title, body, id]);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};

exports.deletePostById = async (req, res) => {
  try {
    const { id } = req.params;
    const sqlQuery = `DELETE FROM posts WHERE id = ?`;
    const post = await pool.query(sqlQuery, [id]);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: err.message });
  }
};
