import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './model.mjs';


// set up express server
const PORT = 3000;
const app = express();
app.use(express.json());


// check that request body has valid data
function validRequest(req) {
    const { name, reps, weight, unit, date } = req.body;
    if (typeof name !== 'string' || name.length === 0) {
        return false;
    }
    if (!Number.isInteger(reps) || reps <= 0) {
        return false;
    }
    if (!Number.isInteger(weight) || weight <= 0) {
        return false;
    }
    if (!['lbs', 'kgs'].includes(unit)) {
        return false;
    }
    if (Number.isNaN(Date.parse(date))) {
        return false;
    }
    return true;
}


// create exercise endpoint
app.post('/exercises', asyncHandler(async (req, res) => {
    if (validRequest(req)) {
        const exercise = await exercises.createExercise(
            req.body.name,
            req.body.reps,
            req.body.weight,
            req.body.unit,
            req.body.date
        );
        res.status(201).json(exercise);
    } else {
        res.status(400).json({ Error: "Invalid request" });
    }
}));


// read all exercises endpoint
app.get('/exercises', asyncHandler(async (req, res) => {
    const exerciseArray = await exercises.readAllExercises();
    res.status(200).json(exerciseArray);
}));


// read one exercise endpoint
app.get('/exercises/:id', asyncHandler(async (req, res) => {
    const exercise = await exercises.readExerciseById(req.params.id);
    if (exercise !== null) {
        res.status(200).json(exercise);
    } else {
        res.status(404).json({ Error: "Not found" });
    }
}));


// update exercise endpoint
app.put('/exercises/:id', asyncHandler(async (req, res) => {
    if (!validRequest(req)) {
        res.status(400).json({ Error: "Invalid request" });
        return;
    }

    const exercise = await exercises.updateExerciseById(req.params.id, req.body);
    if (exercise !== null) {
        res.status(200).json(exercise);
    } else {
        res.status(404).json({ Error: "Not found" });
    }
}));


// delete exercise endpoint
app.delete('/exercises/:id', asyncHandler(async (req, res) => {
    const deleted = await exercises.deleteExerciseById(req.params.id);
    if (deleted) {
        res.status(204).send();
    } else {
        res.status(404).json({ Error: "Not found" });
    }
}));


// error handling middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send({ Error: `${err.message}` });
});


// run express server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});