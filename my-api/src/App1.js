import React from 'react';

const loadUsers = () => {
    return (
        <div>
            {fetch("https://jsonplaceholder.typicode.com/users")
                .then(res => (res.ok ? res : Promise.reject(res)))
                .then(res => res.json())}
        </div>
    );
}
 
export default loadUsers;