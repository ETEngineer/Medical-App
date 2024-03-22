import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {

    const navigate = useNavigate();

    const patient = () =>
    {
        navigate("/patient/login");
    }

    const practitioner = () =>
    {
        navigate("/practitioner/login");
    }

    return (
        <div className = "Homepage">
            <button onClick={patient}>Patient Login</button>
            <button onClick={practitioner}>Practitioner Login</button>
        </div>
    )
}

export default Homepage;