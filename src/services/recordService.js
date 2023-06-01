const Record = require("../database/Record")


const getRecordForWorkout = (workoutId) => {
    try {
        return Record.getRecordForWorkout(workoutId)
    } catch (e) {
        throw e
    }
}


module.exports = {
    getRecordForWorkout
}