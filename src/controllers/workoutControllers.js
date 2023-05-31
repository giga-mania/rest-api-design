const workoutService = require("../services/workoutService")

const getAllWorkouts = (req, res) => {
    const allWorkouts = workoutService.getAllWorkouts()

    res.send({status: "OK", data: allWorkouts})
}

const getOneWorkout = (req, res) => {
    const {params: {workoutId}} = req
    if(!workoutId) return

    const workout = workoutService.getOneWorkout(workoutId)

    res.send({status: "OK", data: workout})
}

const createNewWorkout = (req, res) => {
    const {body} = req
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) return;

    const newWorkout = workoutService.createNewWorkout(body)

    res.send({status: "OK", data: newWorkout})
}

const updateOneWorkout = (req, res) => {
    const {body, params: {workoutId}} = req
    if(!workoutId) return

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