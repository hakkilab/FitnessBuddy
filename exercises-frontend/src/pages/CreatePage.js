import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

function CreatePage() {

    // set up state variables for exercise
    const [name, setName] = useState('');
    const [reps, setReps] = useState(1);
    const [weight, setWeight] = useState(1);
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('mm/dd/yyyy');

    // use history for automatic page navigation
    const history = useHistory();

    // submit POST request for creating exercise
    const createExercise = async () => {
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                reps: Number.parseInt(reps),
                weight: Number.parseInt(weight),
                unit: unit,
                date: date
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status === 201) {
            alert("Successfully added the exercise!");
        } else {
            const errMessage = await response.json();
            alert(`Failed to create exercise. Status ${response.status}. ${errMessage.Error}`);
        }
        history.push("/");
    };

    // display the create exercise form
    return (
        <article>
            <h2>Create an Exercise</h2>
            <p>Use the form below to create a new exercise.</p>
            <form onSubmit={(e) => { e.preventDefault(); createExercise(); }}>
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

export default CreatePage;