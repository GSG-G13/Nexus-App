const { addPostQuery } = require("../../database/");

const addPostController = (req, res) => {
  const { imageURL, captionInput, userId } = req.body;

  addPostQuery({ imageURL, captionInput, userId })
    .then(data => res.status(201).json({
      error: false,
      post: data.rows[0]
    }))
    .catch(() => res.status(500).json({
      error: true,
      message: 'SERVER ERROR'
    }));
}

module.exports = addPostController;