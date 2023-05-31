const Workout = require("../database/Workout")
const {v4: uuid} = require("uuid");


const getAllWorkouts = () => {
    return Workout.findAll()
};

const getOneWorkout = (id) => {
    const workout = Workout.findById(id)

    return workout
};

const createNewWorkout = (body) => {
    const workOutToCreate = {
        ...body,
        createdAt: new Date().toLocaleString("en-GB", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-GB", {timeZone: "UTC"}),
        id: uuid()
    }

    try {
        const newWorkout = Workout.create(workOutToCreate)
        return newWorkout
    } catch (e) {
        throw e
    }
};

const updateOneWorkout = (id, updatesToMake) => {
    const updatedWorkout = Workout.updateById(id, {
        ...updatesToMake,
        updatedAt: new Date().toLocaleString("en-GB", {timeZone: "UTC"})
    })

    return updatedWorkout
};

const deleteOneWorkout = (id) => {
    const deletedWorkout = Workout.deleteById(id)

    return deletedWorkout
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};