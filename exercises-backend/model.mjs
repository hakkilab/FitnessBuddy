import mongoose from 'mongoose';
import 'dotenv/config';


// connect to mongodb with mongoose
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

mongoose.connection.once("open", (err) => {
    if (err) {
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else {
        console.log('Successfully connected to MongoDB Exercises collection using Mongoose.');
    }
});


// define exercise schema and model
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: Date, required: true }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);


// create exercise
async function createExercise(name, reps, weight, unit, date) {
    const exercise = await Exercise.create({
        name: name,
        reps: reps,
        weight: weight,
        unit: unit,
        date: date
    });
    return exercise;
}

// read all exercises
async function readAllExercises() {
    const exerciseArray = await Exercise.find({});
    return exerciseArray;
}

// read exercise by id
async function readExerciseById(id) {
    const exercise = await Exercise.findById(id);
    return exercise;
}

// update exercise by id
async function updateExerciseById(id, update) {
    const exercise = await Exercise.findByIdAndUpdate(id, update, { new: true });
    return exercise;
};

// delete exercise by id
async function deleteExerciseById(id) {
    const result = await Exercise.deleteOne({ _id: id });
    return result.deletedCount === 1;
}


// Export our variables for use in the controller file.
export { createExercise, readAllExercises, readExerciseById, updateExerciseById, deleteExerciseById }