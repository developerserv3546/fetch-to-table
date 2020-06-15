import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Table from "./components/Table";
import {setUserValueByKey} from './utils/UserUtil'
import {getSortedBy} from "./utils/TableUtil";

function App() {

    const [isLoaded, setLoaded] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [isAddUserMode, setAddUserMode] = useState(false);
    const [isHiddenLoadMore, setHiddenLoadMore] = useState(true);

    const loadUsers = () => {
        setLoading(true)
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoaded(true);
                setAddUserMode(false);
                setLoading(false);
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

    const sortBy = (key, asc) => {
        const sortedUsers = getSortedBy(key, users, asc);
        setUsers(sortedUsers);
    };

    window.onscroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
            setHiddenLoadMore(false);
            loadMore();
        }
    };

    const loadMore = () => {
        let id = users.length;
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(data => {
                data.map((el) => {
                    id++;
                    el.id = id;
                    return el;
                });
                const newUsers = users.concat(data);
                setUsers(newUsers);
                setHiddenLoadMore(true);
            }).catch(error => console.log(error))
    }

    return (
        <div className="container-fluid p-0">
            <div className="text-center align-middle my-2">
                <button disabled={isLoading} className="btn btn-dark m-1"
                        onClick={() => loadUsers()}>{!isLoaded ? 'Load' : 'Reload'}&nbsp;<span
                    className="spinner-border spinner-border-sm" role="status" aria-hidden="true" hidden={!isLoading}/>
                </button>
                <button className="btn btn-dark m-1" onClick={() => setAddUserMode(true)} hidden={isAddUserMode}
                        disabled={!isLoaded}>Add User
                </button>
            </div>
            <div>
                {isLoaded &&
                <Table
                    users={users}
                    isAddUserMode={isAddUserMode}
                    addUser={addUser}
                    editUser={editUser}
                    setAddUserMode={setAddUserMode}
                    sortBy={sortBy}/>
                }
                <div className="text-center mb-4" hidden={isHiddenLoadMore}>
                    <div className="spinner-border" role="status">
                        <span className="sr-only"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
