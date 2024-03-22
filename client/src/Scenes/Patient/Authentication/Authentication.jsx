import React, {useState} from 'react';

function Authentication() {

    const [credentials, setCredentials] = useState({});
    const [isRegister, setIsRegister] = useState(false);
    const [isPasswordEqualsConfirmPassword, setValidation] = useState(true);

    const updateCredentials = (field) =>
    {
        setCredentials({...credentials, [field.target.name] : field.target.value});
    }

    const toggleLoginRegister = () =>
    {
        setIsRegister((prev) => !prev);
    }

    //Handle Loggin In
    const Login = () =>
    {

    }

    //Handle Registeration
    const Register = () =>
    {

    }

    return (
        <div className = "Authentication">
            { /*Login Form */
            !isRegister && 
                <div className = "Login-Form-Container">
                    <form className = "Login-Form" action = "/auth/login" method = "post" onSubmit={Login}>
                        <input name = "phone" type = "tel" placeholder="Phone Number" onChange = {updateCredentials} required></input>
                        <input name = "password" type = "password" placeholder="Password" onChange = {updateCredentials} required></input>
                        <button type = "submit">Log In</button>
                    </form>
                    <p style={{cursor : 'pointer'}} onClick={toggleLoginRegister} >Don't have an account ? Register!</p>
                </div>
            }

            { /* Regiter Form */
            isRegister &&
                <div className = "Register-Form-Container">
                    <form className = "Register-Form" action = "/auth/register" method = "post" onSubmit = {Register}>
                        <input name = "firstName" type = "text" placeholder = "First Name" onChange = {updateCredentials} />
                        <input name = "lastName" type = "text" placeholder = "Last Name" onChange = {updateCredentials} />
                        <input name = "phone" type = "tel" placeholder = "Phone Number" onChange = {updateCredentials} />
                        <input name = "password" type = "password" placeholder = "Password" onChange = {updateCredentials} />
                        <input name = "confirmPassword" type = "password" placeholder="Confirm Password" onChange = {updateCredentials} />
                        {!isPasswordEqualsConfirmPassword && <p>Password and Confirm Password do not match</p>}
                        <button type = "submit">Register</button>
                    </form>
                    <p style={{cursor : 'pointer'}} onClick={toggleLoginRegister} >Already have an account ! Log in</p>
                </div>
            }  
        </div>
    ) 
}

export default Authentication;