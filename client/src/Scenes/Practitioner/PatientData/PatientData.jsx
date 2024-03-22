import React, {useEffect, useState} from 'react';
import axios from 'axios';
import "./PatientData.css";

function PatientData() {

    const [userData, setUserData] = useState({firstName : "gautham", lastName : "m k", patientID : "ABSDfejLfo1324", weight : "56", age : "18"});
    const [pastRecord, setPastRecord] = useState({description : "Hello Hi there how are you !!"});
    const [prescription, setPrescription] = useState([{name : "Cetrizine", morning : "Before food", noon : "after food", evening : "-", night : "after food", days : "20"},{name : "Cetrizine", morning : "Before food", noon : "after food", evening : "-", night : "after food", days : "20"},{name : "Cetrizine", morning : "Before food", noon : "after food", evening : "-", night : "after food", days : "20"}]);
    const [refresh, setRefresh] = useState(0);
    const API = axios.create({baseURL : "http://localhost:5000/patient"})
    const applicationID = JSON.parse(window.localStorage.getItem("applicationID"));
    
    const fetchmedications = async() =>
    {
        API.post("/status", {applicationID : applicationID})
        .then( (response) => {
           setUserData(response.data);
        })
        .catch((err) =>
        {
            console.log(err);
        })
    }

    const updateAge = () => 
    {

    }

    useEffect( () =>
    {
        fetchmedications();
    },[refresh]);

    const HandleRefresh = () => {
        setRefresh ((prev) => prev += 1);
    }

    return (
        <div className = "Patient-Data-Container">
        <button onClick = {HandleRefresh}>Refresh</button>
        <div className = "Patient-Details-Container">
            <p>Patient Name : {userData.firstName} {userData.lastName}</p>
            <p>Patient ID : {userData.patientID}</p>
            <p>Weight : {userData.weight} </p>
            <input type = "text" name = "weight" placeholder = "weight" /><input type = "text" name = "hospitalID" placeholder = "Hospital ID" /><button onclick={updateAge}>Update age</button>
            <p>Age : {userData.age}</p>
        </div>
        <div className = "Past-Record-Data">
            <p>Previous Patient Data</p>
            <p>Description : {pastRecord.description}</p>
        </div>
        <div className = "Current-Prescription">
        <table className = "Prescription-Table" id = "Prescription-Table">
                <thead>
                    <tr>
                        <th style={{ width: '10%' }}>name</th>
                        <th style={{ width: '10%' }}>morning</th>
                        <th style={{ width: '10%' }}>noon</th>
                        <th style={{ width: '10%' }}>evening</th>
                        <th style={{ width: '10%' }}>night</th>
                        <th style={{ width: '10%' }}>days</th>
                    </tr>
                </thead>
                <tbody>
                {prescription != null && prescription.map((order, index) => (
                  <tr key = {index} >
                        <td style={{ width: '10%' }}>{order.name}</td>
                        <td style={{ width: '10%' }}>{order.morning}</td>
                        <td style={{ width: '10%' }}>{order.noon}</td>
                        <td style={{ width: '10%' }}>{order.evening}</td>
                        <td style={{ width: '10%' }}>{order.night}</td>
                        <td style={{ width: '10%' }}>{order.days}</td>
                  </tr>
                  ))}
                </tbody>
      </table>
    
        </div>
        </div>
    )
}

export default PatientData;