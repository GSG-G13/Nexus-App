const { addPostQuery } = require("../../database/");

const addPostController = (req, res) => {
  const { imageURL, captionInput, userId } = req.body;

  addPostQuery({ imageURL, captionInput, userId })
    .then(data => res.status(201).json({
      error: false,
      post: data
    }))
    .catch(err => res.status(500).json({
      error: true,
      message: 'SERVER ERROR'
    }));
  console.log(imageURL, captionInput);
}

module.exports = addPostController;