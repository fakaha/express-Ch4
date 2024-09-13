const express = require("express");
const router = express.Router();
const { create, index, show, update, destroy } = require("../../handlers/v1/posts");

router.get("/", (req, res) => {
  res.status(200).json({
    status: true,
    message: "Welcome to api v1",
  });
});

router.post("/posts", create);
router.get("/posts", index);
router.get("/posts/:id", show);
router.put("/posts/:id", update);
router.delete("/posts/:id", destroy);

module.exports = router;
