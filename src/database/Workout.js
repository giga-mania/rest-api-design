const DB = require("./db.json")
const {saveToDatabase} = require("./utils")

const findAll = () => {
    return DB.workouts
}

const findById = (id) => {
    return  DB.workouts.find((workout) => workout.id === id)
}


const create = (newWorkoutToCreate) => {
    const isAlreadyCreated = DB.workouts.findIndex((workout) => workout.name === newWorkoutToCreate.name) > - 1
    if(isAlreadyCreated) return


    DB.workouts.push(newWorkoutToCreate)
    saveToDatabase(DB)
    return newWorkoutToCreate
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
    if(index === -1) return

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