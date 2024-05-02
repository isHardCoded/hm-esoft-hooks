import React, { useState, useEffect } from 'react';

const UserShow = ({id, name, username, email, street, suite, city, zipcode, lat, lng}) => {
    return (
        <div className='userBlock'>
            <div><h1>ID</h1><p>{id}</p></div>
            <div><h1>Name</h1><p>{name}</p></div>
            <div><h1>Username</h1><p>{username}</p></div>
            <div><h1>Email</h1><p>{email}</p></div>
            <div><h1>Address</h1><p>{street}, {suite}, {city}, {zipcode}, {lat}, {lng}</p></div>
        </div>
    )
}

const UserList = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
          .then(response => response.json())
          .then(data => setUsers(data))
          .catch(error => console.error(error));
    }, []);

    return (
    <div className='userSection'>
      <h1>User List</h1>
        <ul className='userList'>
            {users.map(user => (
            <li key={user.id}>
                <UserShow 
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                    street={user.address.street}
                    suite={user.address.suite}
                    city={user.address.city}
                    zipcode={user.address.zipcode}
                    lat={user.address.geo.lat}
                    lng={user.address.geo.lng}
                />
            </li>
            ))}
        </ul>
    </div>
    )
};

export default UserList;