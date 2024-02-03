const express = require('express');
const router = express.Router();
const { getWorkouts, addWorkout,deleteWorkout } = require('../controllers/workout_controller');


router.get('/',getWorkouts)
router.post('/',addWorkout)
router.delete('/:id',deleteWorkout)

module.exports = router;