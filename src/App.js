import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from "./components/Table";
import {setUserValueByKey} from './utils/UserUtil'

function App() {

    const [isLoaded, setLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    const [isAddUserMode, setAddUserMode] = useState(false);

    const loadUsers = () => {
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoaded(true);
                setAddUserMode(false);
            }).catch(error => console.log(error))
    };

    const editUser = (id, key, value) => {
        const newUsers = users.map(el => {
            if (el.id === id) {
                setUserValueByKey(el, key, value);
            }
            return el;
        });
        setUsers(newUsers);
    };

    const addUser = (user) => {
        const newUsers = [...users];
        newUsers.push(user);
        setUsers(newUsers);
        setAddUserMode(false);
    };


    return (
        <div className="container-fluid p-0">
            <div className="text-center align-middle">
                <button className="btn btn-dark m-1"
                        onClick={() => loadUsers()}>{!isLoaded ? 'Load' : 'Reload'}</button>
                <button className="btn btn-dark m-1" onClick={() => setAddUserMode(true)} hidden={isAddUserMode}
                        disabled={!isLoaded}>Add User
                </button>
            </div>
            <div>
                <Table
                    users={users}
                    isAddUserMode={isAddUserMode}
                    addUser={addUser}
                    editUser={editUser}
                    setAddUserMode={setAddUserMode}/>
            </div>
        </div>
    );
}

export default App;
