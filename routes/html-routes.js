const express = require("express");
const router = express.Router()
let path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

router.get("/exercise", (req,res) => {
    res.sendFile(path.join(__dirname, "/Develop/public/exercise.html"));
});

router.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname, "/Develop/public/stats.html"))
});
