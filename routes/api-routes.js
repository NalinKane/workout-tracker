const workout = require("./models/workout.js");
const router = require("express").Router;

// POST
router.post("api/workouts", (req, res) => {
  workout
    .create({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT
router.put("api/workouts/:id", ({ body, params }, res) => {
  workout
    .findByIdAndUpdate(
      params.id,
      { $push: { exercises: body } },
      {
        new: true,
        runValidators: true
      }
    )
    .catch(err => {
      res.json(err);
    });
});

// GET
router.get("api/workouts", (req, res) => {
  workout
    .find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET
router.get("api/workouts/range", ({ body }, res) => {
  workout
    .find({})
    .limit(10)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// DELETE
router.delete("api/workouts", ({ body }, res) => {
  workout
    .findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
