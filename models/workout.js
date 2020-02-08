const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: { type: String, require: "Enter an exercise type", trim: true },

        name: {
          type: String,
          require: "Choose exercise name",
          trim: true
        },

        duration: {
          type: Number,
          require: "How long was your workout?"
        },

        distance: {
          type: Number,
          require: "How far did you run?"
        },

        reps: {
          type: Number,
          require: "How many reps did you do?"
        },

        sets: {
          type: Number,
          require: "How many sets did you do?"
        },

        weight: {
          type: Number,
          require: "How much did you lift?"
        }
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

workoutSchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
