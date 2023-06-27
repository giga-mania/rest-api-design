const express = require("express")
const apicache = require("apicache");
const {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    deleteOneWorkout,
    updateOneWorkout
} = require("../../controllers/workoutControllers")
const {getRecordForWorkout} = require("../../controllers/recordController")

const router = express.Router()
const cache = apicache.middleware;

router.get("/", cache("2 minutes"), getAllWorkouts)

router.get("/:workoutId", getOneWorkout)

router.get("/:workoutId/records", getRecordForWorkout)

router.post("/", createNewWorkout)

router.patch("/:workoutId", updateOneWorkout)

router.delete("/:workoutId", deleteOneWorkout)


module.exports = router