import React, {useState} from "react";

function EditableCell(props) {

    const [isEditMode, setEditMode] = useState(false);
    const [value, setValue] = useState(props.data);

    const onClickSave = () => {
        props.editUser(props.id, props.cellKey, value);
        setEditMode(false);
    };

    const showEditMode = () => {
        return (
            <div>
                <input type="text" className="form-control mb-1" value={value}
                       onChange={(e) => setValue(e.target.value)}/>
                <div className="btn-group btn-group-sm w-100 mw-200px" role="group">
                    <button onClick={() => setEditMode(false)} className="w-50 btn btn-dark">Cancel</button>
                    <button onClick={() => onClickSave()} className="w-50 btn btn-success">Save</button>
                </div>
            </div>
        );
    };

    return (
        <td onDoubleClick={() => setEditMode(true)}>{!isEditMode ? props.data : showEditMode()}</td>
    );
};

export default EditableCell;