import React, {useState} from "react";

function AddUser(props) {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [street, setStreet] = useState('');
    const [suite, setSuite] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [catchPhrase, setCatchPhrase] = useState('');
    const [bs, setBS] = useState('');

    const onSave = () => {
        const user = {
            id: props.id,
            name: name,
            username: username,
            email: email,
            address: {
                street: street,
                suite: suite,
                city: city,
                zipcode: zipcode
            },
            phone: phone,
            website: website,
            company: {
                name: companyName,
                catchPhrase: catchPhrase,
                bs: bs
            }
        };

        props.addUser(user);
    };


    return (
        <>
            <tr className="border-0 no-hover">
                <th scope="row">{props.id}</th>
                <td><input type="text" className="form-control" placeholder="Name..." value={name}
                           onChange={e => setName(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Username..." value={username}
                           onChange={e => setUsername(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Email..." value={email}
                           onChange={e => setEmail(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Street..." value={street}
                           onChange={e => setStreet(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Suite..." value={suite}
                           onChange={e => setSuite(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="City..." value={city}
                           onChange={e => setCity(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Zip Code..." value={zipcode}
                           onChange={e => setZipcode(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Phone..." value={phone}
                           onChange={e => setPhone(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Website..." value={website}
                           onChange={e => setWebsite(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Company Name..." value={companyName}
                           onChange={e => setCompanyName(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="Catch Phrase..." value={catchPhrase}
                           onChange={e => setCatchPhrase(e.target.value)}/></td>
                <td><input type="text" className="form-control" placeholder="BS..." value={bs}
                           onChange={e => setBS(e.target.value)}/></td>
            </tr>
            <tr className="no-hover">
                <td colSpan="13" className="text-center align-middle">
                    <div className="btn-group btn-group mw-200px" role="group">
                        <button onClick={() => props.setAddUserMode(false)} className="btn btn-dark">Cancel</button>
                        <button onClick={() => onSave()} className="btn btn-success" disabled={!name.trim().length}>Save</button>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default AddUser;