/** @format */

const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/index");

const { Post } = require("../models/post");

//get all posts (R -all)

router.get("/api/posts", (req, res) => {
  Post.find({}, (err, data) => {
    if (!err) {
      res.send(data);
    } else {
      console.log(err);
    }
  });
});

router.get("/api/get_user_posts", authenticateToken, (req, res) => {
  Post.find({ "post.username": req.user.username }, (err, posts) => {
    if (!err) {
      res.json(
        posts.filter((el) => {
          return el.username === req.user.username;
        })
      );
    } else {
      console.log(err);
    }
  });
});
module.exports = router;
