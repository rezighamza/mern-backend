const Workout = require('../models/workout');


function getWorkouts(req, res) {
    Workout.find()
        .then(workouts => res.json(workouts))
        .catch(err => res.status(400).json('Error: ' + err));
}


function addWorkout(req, res) {
    Workout.create(req.body)
        .then(() => res.json('Workout added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}   

function deleteWorkout(req,res) {
    const id = req.params.id 
    Workout.findByIdAndDelete(id)
    .then(() => res.json('Workout deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
}

module.exports = {
    getWorkouts,
    addWorkout,
    deleteWorkout
}