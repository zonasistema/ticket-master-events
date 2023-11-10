import { useState } from "react";

//Creamos un componente formulario
const SignupForm = () => {
    //Declaramos todas las variables y estados de los imput del formulario con useState vacío
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [phone, setPhone] = useState('');
    
    //Declaramos la función del boton clear 
    const handleClearClick = () => {
        setName('');
        setAddress('');
        setAge('');
        setPhone('');
        setZipcode('');
    };

    // Declaramos la función del botón submit
    // Los submit por defecto, refrescan la página. Por ello colocamos el argumento evt y lo eliminamos con preventDefault()
    const handleSubmitForm = (evt) => {
        //preventDefault: Elimina el refrescamiento de la página
        evt.preventDefault();
        console.log('submit', {
            name,
            age,
            zipcode,
            phone,
            address
        });

    };
    return (
        // declaramos una función flecha onChange con el argumento evt que toma el target.value y cambia el valor.
        <form name="formEvents" onSubmit={handleSubmitForm}>
            <label>
                Name
                <input value={name} onChange={evt => setName(evt.target.value)} required />
            </label>
            <br />
            <label>
                Age
                <input value={age} onChange={evt => setAge(evt.target.value)} required />
            </label>
            <br />
            <label>
                Address
                <input value={address} onChange={evt => setAddress(evt.target.value)} required />
            </label>
            <br />
            <label>
                ZipCode
                <input value={zipcode} onChange={evt => setZipcode(evt.target.value)} required />
            </label>
            <br />
            <label>
                Phone
                <input value={phone} onChange={evt => setPhone(evt.target.value)} required />
            </label>
            <br />
            <div>
                <button type="button" onClick={handleClearClick}>Clear</button>
                <button type="submit">Submit</button>
            </div>
        </form>

    );
};

export default SignupForm;