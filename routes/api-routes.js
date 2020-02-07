const Workout = require("../models/workout.js");
const router = require("express").Router();

// POST
router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// PUT
router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    {
      new: true,
      runValidators: true
    }
  ).catch(err => {
    res.json(err);
  });
});

// router.post("/api/workouts/:id", ({ body }, res) => {
//   db.Workout.create(body)
//     .then(({ _id }) =>
//       db.Workout.findOneAndUpdate(
//         {},
//         { $push: { workout: _id } },
//         { new: true }
//       )
//     )
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.json(err);
//     });
// });

// GET
router.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

// GET
router.get("api/workouts/range", ({ body }, res) => {
  Workout.find({})
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
  Workout.findByIdAndDelete(body.id)
    .then(() => {
      res.json(true);
    })
    .catch(err => {
      res.json(err);
    });
});

module.exports = router;
