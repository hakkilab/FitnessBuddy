import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function EditPage({ exercise }) {

    // set up state variables for exercise
    const [name, setName] = useState(exercise.name);
    const [reps, setReps] = useState(exercise.reps);
    const [weight, setWeight] = useState(exercise.weight);
    const [unit, setUnit] = useState(exercise.unit);
    const [date, setDate] = useState(exercise.date.slice(0, 10));

    // use history for automatic page navigation
    const history = useHistory();

    // submit PUT request for updating exercise
    const updateExercise = async () => {
        const response = await fetch(`/exercises/${exercise._id}`, {
            method: 'PUT',
            body: JSON.stringify({
                name: name,
                reps: Number.parseInt(reps),
                weight: Number.parseInt(weight),
                unit: unit,
                date: date
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 200) {
            alert("Successfully edited exercise!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to update exercise with id ${exercise._id}. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    }

    // display the edit exercise form
    return (
        <article>
            <h2>Edit an exercise</h2>
            <p>Use the form below to edit the exercise.</p>
            <form onSubmit={(e) => { e.preventDefault(); updateExercise(); }}>
                <fieldset>
                    <legend>Which exercise are you adding?</legend>
                    <label htmlFor="name">Exercise Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        id="name"
                        required />

                    <label htmlFor="reps">Number of Reps</label>
                    <input
                        type="number"
                        value={reps}
                        min="1"
                        onChange={e => setReps(e.target.value)}
                        id="reps"
                        required />

                    <label htmlFor="weight">Exercise Weight</label>
                    <input
                        type="number"
                        value={weight}
                        min="1"
                        onChange={e => setWeight(e.target.value)}
                        id="weight"
                        required />

                    <label htmlFor="unit">Weight Unit</label>
                    <select name="unit"
                        value={unit}
                        onChange={e => setUnit(e.target.value)}
                        id="unit"
                        required>
                        <option value="lbs">pounds</option>
                        <option value="kgs">kilograms</option>
                    </select>

                    <label htmlFor="date">Exercise Date</label>
                    <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        id="date"
                        required />

                    <p>
                        <button type="submit" id="submit">Save</button>
                    </p>
                </fieldset>
            </form>
        </article>
    );
}
export default EditPage;