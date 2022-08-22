import React from 'react';

import Row from './Row';

function Table({ exercises, onEdit, onDelete }) {
    return (
        // display table for exercises
        <table>
            <caption>Current list of exercises</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) =>
                    <Row
                        exercise={exercise}
                        key={i}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />)}
            </tbody>
        </table>
    );
}

export default Table;
