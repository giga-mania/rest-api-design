const DB = require("./db.json")
const {saveToDatabase} = require("./utils")

const findAll = () => {
    try {
        return DB.workouts
    } catch (e) {
        throw {
            status: 500,
            message: e?.message || e
        }
    }
}

const findById = (id) => {
    return DB.workouts.find((workout) => workout.id === id)
}


const create = (newWorkoutToCreate) => {
    const isAlreadyCreated = DB.workouts.findIndex((workout) => workout.name === newWorkoutToCreate.name) > -1
    if (isAlreadyCreated) {
        throw {
            status: 400,
            message: `Workout with the name '${newWorkoutToCreate.name}' already exists`,
        }
    }

    try {
        DB.workouts.push(newWorkoutToCreate)
        saveToDatabase(DB)
        return newWorkoutToCreate
    } catch (e) {
        throw {
            status: 500,
            message: e?.message || e
        }
    }
}

const updateById = (id, updatesToMake) => {
    const index = DB.workouts.findIndex((workout) => workout.id === id)
    const workoutToUpdate = DB.workouts[index]

    const updatedWorkout = {
        ...workoutToUpdate,
        ...updatesToMake
    }

    DB.workouts[index] = updatedWorkout
    saveToDatabase(DB)

    return updatedWorkout
}


const deleteById = (id) => {
    const index = DB.workouts.findIndex((workout) => workout.id === id)
    if (index === -1) return

    const workoutToDelete = DB.workouts.splice(index, 1)

    saveToDatabase(DB)
    return workoutToDelete
}


module.exports = {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}