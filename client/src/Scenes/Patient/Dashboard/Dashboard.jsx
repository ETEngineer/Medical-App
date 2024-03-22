import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {

    const navigate = useNavigate();
    const medicalRecords = () => {
        navigate('/medicalRecords');
    }

    const medications = () => {
        navigate('/medications');
    }

    return (
        <div>
            <p>username</p>
            <p>Application ID</p>
            <div className = "Medical Records">
                <button onClick={medicalRecords}>Medical Records</button>
            </div>
            <div className = "Medications">
                <button onClick={medications}>Medications</button>
            </div>
        </div>
    )
}

export default Dashboard;