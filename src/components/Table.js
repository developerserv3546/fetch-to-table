import React from "react";
import AddUser from "./AddUser";
import EditableCell from "./EditableCell";
import {cellKey} from '../utils/Constant';
import TableHeadCell from "./TableHeadCell";

function Table(props) {

    return (
        <table className="table table-hover">
            <thead className="thead-dark">
            <tr>
                <TableHeadCell text={'#'} sortBy={props.sortBy}/>
                <TableHeadCell text={'Name'} sortBy={props.sortBy}/>
                <TableHeadCell text={'Username'} sortBy={props.sortBy}/>
                <TableHeadCell text={'Email'} sortBy={props.sortBy}/>
                <TableHeadCell text={'Address'} sortBy={props.sortBy}/>
                <TableHeadCell text={'Phone'} sortBy={props.sortBy}/>
                <TableHeadCell text={'Website'} sortBy={props.sortBy}/>
                <TableHeadCell text={'Company'} sortBy={props.sortBy}/>
            </tr>
            <tr>
                <TableHeadCell text={'Street'} sortBy={props.sortBy}/>
                <TableHeadCell text={'Suite'} sortBy={props.sortBy}/>
                <TableHeadCell text={'City'} sortBy={props.sortBy}/>
                <TableHeadCell text={'Zipcode'} sortBy={props.sortBy}/>
                <TableHeadCell text={'Name '} sortBy={props.sortBy}/>
                <TableHeadCell text={'Catch Phrase'} sortBy={props.sortBy}/>
                <TableHeadCell text={'BS'} sortBy={props.sortBy}/>
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