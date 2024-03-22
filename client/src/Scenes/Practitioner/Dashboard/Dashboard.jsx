import React from 'react';
import { useNavigate } from 'react-router-dom';

function PDashboard() {

    const navigate = useNavigate();
    const medicalRecords = () => {
        navigate('medicalRecords');
    }

    const patientdata = () => {
        navigate('medications');
    }

    return (
        <div>
            <p>Doctor's Name</p>
            <p>Doctor's ID</p>
            <div className = "Medical Records">
                <button onClick={medicalRecords}>Medical Records</button>
            </div>
            <div className = "Patient-Data">
                <button onClick={patientdata}>Patient Data</button>
            </div>
        </div>
    )
}

export default PDashboard;