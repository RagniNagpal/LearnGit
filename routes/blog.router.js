import express from "express";

const router = express.Router(); // Fixed: use express.Router() instead of express("express")

// GET /getBlogs
router.get("/getBlogs", (req, res) => {
  res.json({
    success: true,
    data: [
      { title: "My first blog", content: "This is the content of my blog." },
      { title: "Another blog", content: "More content here." }
    ]
  });
});

export default router;
