const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/workout_routes');
const cors = require('cors');
const env = require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use(cors());
console.log(process.env.FRONTEND_URL);

const dbURL = process.env.DB_URL;
mongoose.connect(dbURL)
    .then(() => {
        app.listen(process.env.PORT || 3300)
        console.log('Connected to DB')
    })
    .catch(err => console.log(err));


app.use('/api/workouts', router);   

