import express from "express";

const router = express.Router();

router.get("/users", (req, res) => {
    res.send("Users route");
});

router.get("/posts", (req, res) => {
    res.send("Posts route");
});

export default router;