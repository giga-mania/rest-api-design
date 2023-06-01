const recordService = require("../services/recordService")


const getRecordForWorkout = (req, res) => {
    const {params: {workoutId}} = req

    if(!workoutId) {
        res.status(4000).send({
            status: "FAILED",
            data: {
                error: "Workout id as query parameter were not provided"
            }
        })
    }

    try {
        const record = recordService.getRecordForWorkout(workoutId)
        res.status(200).send({
            status: "OK",
            data: record
        })
    } catch (e) {
        res
            .status(e?.status || 500)
            .send({status: "FAILED", data: {error: e?.message || e}})
    }
}


module.exports = {
    getRecordForWorkout
}