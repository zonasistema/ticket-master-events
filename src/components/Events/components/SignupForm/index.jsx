import { useForm } from "react-hook-form";

//Creamos un componente formulario
const SignupForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleClearClick = () => {
        reset();
    };

    const handleSubmitForm = (data) => {
        //preventDefault: Elimina el refrescamiento de la página
       console.log(data);

    };

    console.log(errors);

    return (
        // declaramos una función flecha onChange con el argumento evt que toma el target.value y cambia el valor.
        <form name="formEvents" onSubmit={handleSubmit(handleSubmitForm)}>
            <label>
                Name
                <input {...register('name', {required: true })} />
            </label>
            <br />
            <label>
                Age
                <input {...register('age', {required: true })} />
            </label>
            <br />
            <label>
                Address
                <input {...register('address', {required: true })} />
            </label>
            <br />
            <label>
                ZipCode
                <input {...register('zipcode', {required: true })} />
            <br />
            </label>
            <label for="phone">
                Phone
                <input {...register('phone', {required: true })} />
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