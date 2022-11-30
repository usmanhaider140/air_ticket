exports.getPost = async (req, res) => {
  try {
    res.status(200).json("Hello World!");
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
