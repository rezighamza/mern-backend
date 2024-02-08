const express = require('express');
const app = express();
const mongoose = require('mongoose');
const router = require('./routes/workout_routes');
const cors = require('cors');
const env = require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const corsOptions = {
    origin: [process.env.FRONTEND_URL],
    Headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': process.env.FRONTEND_URL,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}};

app.use(cors(corsOptions));
console.log(process.env.FRONTEND_URL);

const dbURL = process.env.DB_URL;
mongoose.connect(dbURL)
    .then(() => {
        app.listen(process.env.PORT || 3300)
        console.log('Connected to DB')
    })
    .catch(err => console.log(err));


app.use('/api/workouts', router);   

