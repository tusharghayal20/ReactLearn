import React, { useState } from 'react';

const PersonInfo = () => {
    const [person, setPerson] = useState({
        name: 'John Doe',
        age: 25,
        email: 'johndoe@example.com',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPerson((prevPerson) => ({
            ...prevPerson,
            [name]: value,
        }));
    };

    return (
        <div>
            <h2>Person Info</h2>
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Email: {person.email}</p>

            <h3>Update Info</h3>
            <form>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={person.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Age:
                        <input
                            type="number"
                            name="age"
                            value={person.age}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={person.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default PersonInfo;