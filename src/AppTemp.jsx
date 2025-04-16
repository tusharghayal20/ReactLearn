import React from 'react';

const AppTemp = () => {
    const person = {
        name: 'Tushar',
        age: 25,
        location: 'India',
    };

    const updatedPerson = {
        ...person,
        profession: 'Developer',
    };

    return (
        <div>
            <h1>Spread Operator Example</h1>
            <p>Original Person: {JSON.stringify(person)}</p>
            <p>Updated Person: {JSON.stringify(updatedPerson)}</p>
        </div>
    );
};

export default AppTemp;