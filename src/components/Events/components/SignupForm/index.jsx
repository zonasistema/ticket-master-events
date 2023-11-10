import { useState } from "react";

const SignupForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');

    return (
        <form>
            <label>
                Name
                <input value={name} onChange={evt => setName(evt.target.value)}/>
            </label>
            <label>
                Age
                <input value={age} onChange={evt => setAge(evt.target.value)} />
            </label>
            <label>
                Address
                <input value={address} onChange={evt => setAddress(evt.target.value)} />
            </label>
            <label>
                ZipCode
                <input value={zipcode} onChange={evt => setZipcode(evt.target.value)} />
            </label>
            <label>
                Phone
                <input value={phone} onChange={evt => setPhone(evt.target.value)} />
            </label>
        </form>

    );
};

export default SignupForm;