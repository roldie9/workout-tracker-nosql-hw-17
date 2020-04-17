const router = require("express").Router();

//const db = require("../models");
const Workout = require("../models/workoutModel");


router.post("/api/workouts", (req, res) => {
    Workout.create({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

router.put("api/workouts/:id", (req, res) => {
    Workout.create(req.body);
    console.log(req.body)
    res.json();
});

router.get("/api/workouts", (req, res) => {
    Workout.find({}, (err, data) => {
        if (err) { 
            res.send(err)
        } else {
            res.json(data)
        }
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7)
    .then(dbWorkouts => {
        console.log(dbWorkouts)
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.json(err);
    });
});

router.delete("/api/workouts", ({ body }, res) => {
    Workout.findByIdAndDelete(body.id)
      .then(() => {
        res.json(true);
      })
      .catch(err => {
        res.json(err);
      });
  });


module.exports = router;

