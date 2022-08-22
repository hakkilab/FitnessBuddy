import React from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';

function Row({ exercise, onEdit, onDelete }) {
    // display table row for exercise
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight} {exercise.weight === 1 ? exercise.unit.slice(0, 2) : exercise.unit}</td>
            <td>{(new Date(exercise.date)).toLocaleDateString()}</td>
            <td><MdEdit onClick={() => onEdit(exercise)} /></td>
            <td><MdDelete onClick={() => onDelete(exercise)} /></td>
        </tr>
    );
}

export default Row;