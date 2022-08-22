import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Table from '../components/Table';


function HomePage({ setExercise }) {
    // use history for automatic page navigation
    const history = useHistory();

    // set up state variable for array of exercises
    const [exercises, setExercises] = useState([]);

    // submit GET request for reading exercises
    const readExercises = async () => {
        const response = await fetch('/exercises', { method: 'GET' });
        const exerciseArray = await response.json();
        setExercises(exerciseArray);
    }

    // handle editing exercise
    const handleEditExercise = async (exercise) => {
        setExercise(exercise);
        history.push("/edit-exercise");
    }

    // submit DELETE request for deleting exercise
    const deleteExercise = async (exercise) => {
        const response = await fetch(`/exercises/${exercise._id}`, { method: 'DELETE' });
        if (response.status === 204) {
            setExercises(exercises.filter(elem => elem._id !== exercise._id));
        } else {
            const errMessage = await response.json();
            console.error(`Failed to delete exercise with id ${exercise._id}. Status ${response.status}. ${errMessage.Error}`);
        }
    }

    // read the exercises on mounting
    useEffect(() => { readExercises() }, []);

    // display the exercises
    return (
        <article>
            <h2>List of Exercises</h2>
            <p>Use the icons in the table below to edit or delete exercises.</p>
            <Table
                exercises={exercises}
                onEdit={handleEditExercise}
                onDelete={deleteExercise}
            />
        </article>
    );
}

export default HomePage;