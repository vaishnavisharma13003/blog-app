const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogByIdController,
  deleteBlogController,
  userBlogController,
} = require("../controllers/blogController");

// router object
const router = express.Router();

// routes
// GET || all blogs
router.get("/all-blog", getAllBlogsController);

// post || create blog
router.post("/create-blog", createBlogController);

// put || update blog
router.put("/update-blog/:id", updateBlogController);

// get the single blog
router.get("/get-blog/:id", getBlogByIdController);

// dlete
router.delete("/delete-blog/:id", deleteBlogController);

// get  ||user blog
router.get("/user-blog/:id", userBlogController);
module.exports = router;
