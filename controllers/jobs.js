const getAllJobs = async (req, res) => {
    res.send('getAllJobs route')
}
const getJob = async (req, res) => {
    res.send('get Job route')
}
const createJob = async (req, res) => {
    res.send('Create route')
}
const updateJob = async (req, res) => {
    res.send('Update route')
}
const deleteJob = async (req, res) => {
    res.send('Delete route')
}

module.exports = {
    getAllJobs, getJob, createJob, updateJob, deleteJob
}