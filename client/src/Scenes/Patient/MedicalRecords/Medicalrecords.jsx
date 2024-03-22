import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Medicalrecords() {

    const [records, setRecords] = useState({data : "jello"});
    const [refresh, setRefresh] = useState(0);
    const API = axios.create({baseURL : "http://localhost:5000/patient"})
    const applicationID = JSON.parse(window.localStorage.getItem("applicationID"));
    
    const fetchRecords = async() =>
    {
        API.post("/status", {applicationID : applicationID})
        .then( (response) => {
            setRecords(response.data);
        })
        .catch((err) =>
        {
            console.log(err);
        })
    }

    useEffect( () =>
    {
        fetchRecords();
    },[refresh]);

    const HandleRefresh = () => {
        setRefresh ((prev) => prev += 1);
    }

    return (
        <>
        <button onClick = {HandleRefresh}>Refresh</button>
        <div>
            Hello Medical records
        </div>
        </>
    )
}

export default Medicalrecords;