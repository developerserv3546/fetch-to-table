import React from "react";
import AddUser from "./AddUser";
import EditableCell from "./EditableCell";
import {cellKey} from '../utils/Constant';

function Table(props) {
    return (
        <table className="table table-hover">
            <thead className="thead-dark">
            <tr>
                <th scope="col" rowSpan="2" className="text-center align-middle">#</th>
                <th scope="col" rowSpan="2" className="text-center align-middle">Name</th>
                <th scope="col" rowSpan="2" className="text-center align-middle">Username</th>
                <th scope="col" rowSpan="2" className="text-center align-middle">Email</th>
                <th scope="col" rowSpan="1" colSpan="4" className="text-center align-middle">Address</th>
                <th scope="col" rowSpan="2" className="text-center align-middle">Phone</th>
                <th scope="col" rowSpan="2" className="text-center align-middle">Website</th>
                <th scope="col" rowSpan="1" colSpan="3" className="text-center align-middle">Company</th>
            </tr>
            <tr>
                <th className="text-center align-middle">Street</th>
                <th className="text-center align-middle">Suit</th>
                <th className="text-center align-middle">City</th>
                <th className="text-center align-middle">Zipcode</th>
                <th className="text-center align-middle">Name</th>
                <th className="text-center align-middle">Catch Phrase</th>
                <th className="text-center align-middle">BS</th>
            </tr>
            </thead>
            <tbody>
            {props.isAddUserMode ? <AddUser
                addUser={props.addUser}
                id={props.users.length + 1}
                setAddUserMode={props.setAddUserMode}/> : null}
            {props.users.map((el) => {
                return (
                    <tr key={el.id}>
                        <th scope="row">{el.id}</th>
                        <EditableCell id={el.id} data={el.name} cellKey={cellKey.name} editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.username} cellKey={cellKey.username}
                                      editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.email} cellKey={cellKey.email} editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.address.street} cellKey={cellKey.street}
                                      editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.address.suite} cellKey={cellKey.suite}
                                      editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.address.city} cellKey={cellKey.city}
                                      editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.address.zipcode} cellKey={cellKey.zipcode}
                                      editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.phone} cellKey={cellKey.phone} editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.website} cellKey={cellKey.website} editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.company.name} cellKey={cellKey.companyName}
                                      editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.company.catchPhrase} cellKey={cellKey.catchPhrase}
                                      editUser={props.editUser}/>
                        <EditableCell id={el.id} data={el.company.bs} cellKey={cellKey.bs} editUser={props.editUser}/>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default Table;