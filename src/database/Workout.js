const DB = require("./db.json")
const {saveToDatabase} = require("./utils")

const findAll = (filterParams) => {
    try {
        if(filterParams.mode) {
            return DB.workouts.filter(workout => workout.mode.toLowerCase().includes(filterParams.mode))
        }

        return DB.workouts
    } catch (e) {
        throw {
            status: 500,
            message: e?.message || e
        }
    }
}

const findById = (id) => {
    try {
        const workout = DB.workouts.find((workout) => workout.id === id)
        if (!workout) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${id}'`,
            }
        }
    } catch (e) {
        throw {
            status: 500,
            message: e?.message || e
        }
    }
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
    if (index === -1) {
        throw {
            status: 400,
            message: "Workout with provided id doesn't exist",
        }
    }

    try {
        const workoutToUpdate = DB.workouts[index]
        const updatedWorkout = {
            ...workoutToUpdate,
            ...updatesToMake
        }

        DB.workouts[index] = updatedWorkout
        saveToDatabase(DB)
        return updatedWorkout
    } catch (e) {
        throw {
            status: 500,
            message: e?.message || e
        }
    }
}


const deleteById = (id) => {
    const index = DB.workouts.findIndex((workout) => workout.id === id)
    if (index === -1) {
        throw {
            status: 400,
            message: "Workout with provided id doesn't exist",
        }
    }
    
    try {
        const workoutToDelete = DB.workouts.splice(index, 1)
        saveToDatabase(DB)
        return workoutToDelete
    } catch (e) {
        throw {
            status: 500,
            message: e?.message || e
        }
    }
}


module.exports = {
    findAll,
    findById,
    create,
    updateById,
    deleteById
}