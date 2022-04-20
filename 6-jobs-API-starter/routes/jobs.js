

const express = require('express')
const router = express.Router()

const {getAllJons,getJob,createJob,deleteJob,updateJob} = require('../controllers/jobs')

router.route('/').post(createJob).get(getAllJons)
router.post('/:id').get(getJob).delete(deleteJob).patch(updateJob)

module.exports = router 