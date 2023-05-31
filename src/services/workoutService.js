const Workout = require("../database/Workout")
const {v4: uuid} = require("uuid");


const getAllWorkouts = () => {
    try {
        return Workout.findAll()
    } catch (e) {
        throw e
    }
};

const getOneWorkout = (id) => {
    try {
        return Workout.findById(id)
    } catch (e) {
        throw e
    }
};

const createNewWorkout = (body) => {
    const workOutToCreate = {
        ...body,
        createdAt: new Date().toLocaleString("en-GB", {timeZone: "UTC"}),
        updatedAt: new Date().toLocaleString("en-GB", {timeZone: "UTC"}),
        id: uuid()
    }

    try {
        return Workout.create(workOutToCreate)
    } catch (e) {
        throw e
    }
};

const updateOneWorkout = (id, updatesToMake) => {
    try {
        return Workout.updateById(id, {
            ...updatesToMake,
            updatedAt: new Date().toLocaleString("en-GB", {timeZone: "UTC"})
        })
    } catch (e) {
        throw e
    }
};

const deleteOneWorkout = (id) => {
    try {
        return  Workout.deleteById(id)
    } catch (e) {
        throw e
    }
};

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
};