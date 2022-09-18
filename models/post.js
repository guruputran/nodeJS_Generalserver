/** @format */

const mongoose = require("mongoose");

//Post schema definition

const Post = mongoose.model("Post", {
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = { Post };
