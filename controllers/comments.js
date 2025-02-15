const Comment = require("../models/Comment");

module.exports = {
  createComment: async (req, res) => {
    console.log(req.body);
    console.log("this should be the id");
    console.log(req.params.id);

    try {
      await Comment.create({
        comment: req.body.comment,
        likes: 0,
        post: req.params.id,
      });
      console.log("Comment has been added!");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
};
