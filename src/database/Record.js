const DB = require("../database/db.json")

const getRecordForWorkout = (id) => {
    try {
        const record = DB.records.filter(record => record.workout === id)
        if(!record) {
            throw {
                status: 400,
                message: "No record found for this workout"
            }
        }
        return record
    } catch (e) {
        throw {
            status: e.status || 500,
            message: e?.message || e
        }
    }
}


module.exports = {
    getRecordForWorkout
}