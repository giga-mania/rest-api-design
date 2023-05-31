const workoutService = require("../services/workoutService")

const getAllWorkouts = (req, res) => {
    try {
        const allWorkouts = workoutService.getAllWorkouts()
        res.status(200).send({status: "OK", data: allWorkouts && []})
    } catch (e) {
        res
            .status(e?.status || 500)
            .send({status: "FAILED", data: {error: e?.message || e}})
    }
}

const getOneWorkout = (req, res) => {
    const {params: {workoutId}} = req
    if (!workoutId) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "WorkoutId as query parameter wer not provided"
            }
        })
    }

    try {
        const workout = workoutService.getOneWorkout(workoutId)
        res.send({status: "OK", data: workout})
    } catch (e) {
        res
            .status(e?.status || 500)
            .send({status: "FAILED", data: {error: e?.message || e}})
    }
}

const createNewWorkout = (req, res) => {
    const {body} = req
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        res.status(400).send({
            status: "FAILED",
            data: {
                error: "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'"
            }
        })
        return
    }

    try {
        const newWorkout = workoutService.createNewWorkout(body)
        res.status(201).send({status: "OK", data: newWorkout})
    } catch (e) {
        res
            .status(e?.status || 500)
            .send({status: "FAILED", data: {error: e?.message || e}})
    }
}

const updateOneWorkout = (req, res) => {
    const {body, params: {workoutId}} = req
    if (!workoutId) return

    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body)

    res.send({status: "OK", data: updatedWorkout})
}

const deleteOneWorkout = (req, res) => {
    const {params: {workoutId}} = req

    const deletedWorkout = workoutService.deleteOneWorkout(workoutId)

    res.send({status: "OK", data: deletedWorkout})
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}