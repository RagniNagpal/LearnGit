import express from "express";

const router = express.Router(); // 
// GET /getBlogs
router.get("/getUsers", (req, res) => {
  
  res.json({
    success: true,
    data: [
      { title: "Name", para: "This is the content of my blog." }

    ]
  });
});

res.send("DONE");

export default router;
