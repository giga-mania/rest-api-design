const express = require("express")
const {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    deleteOneWorkout,
    updateOneWorkout
} = require("../../controllers/workoutControllers")
const {getRecordForWorkout} = require("../../controllers/recordController")

const router = express.Router()


router.get("/", getAllWorkouts)

router.get("/:workoutId", getOneWorkout)

router.get("/:workoutId/records", getRecordForWorkout)

router.post("/", createNewWorkout)

router.patch("/:workoutId", updateOneWorkout)

router.delete("/:workoutId", deleteOneWorkout)


module.exports = router