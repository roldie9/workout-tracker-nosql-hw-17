const router = require("express").Router();

let db = require("..models");
let Workout = require("../models/workoutModel");

router.put("api/workouts/:id", (req, res) => {
    db.Workout.create(req.body);
    console.log(req.body)
    res.json();
});

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, data) => {
        if (err) { 
            res.send(err)
        } else {
            res.json(data)
        }
    });
});

// router.get("/api/workouts/range", (req, res) => {
//     db.Workout.
// })

