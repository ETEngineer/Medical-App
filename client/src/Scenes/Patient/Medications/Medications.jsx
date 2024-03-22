import React, {useEffect, useState} from 'react';
import axios from 'axios';

function Medications() {

    const [medications, setmedications] = useState({data : "jello"});
    const [refresh, setRefresh] = useState(0);
    const API = axios.create({baseURL : "http://localhost:5000/patient"})
    const applicationID = JSON.parse(window.localStorage.getItem("applicationID"));
    
    const fetchmedications = async() =>
    {
        API.post("/status", {applicationID : applicationID})
        .then( (response) => {
            setmedications(response.data);
        })
        .catch((err) =>
        {
            console.log(err);
        })
    }

    useEffect( () =>
    {
        fetchmedications();
    },[refresh]);

    const HandleRefresh = () => {
        setRefresh ((prev) => prev += 1);
    }

    return (
        <>
        <button onClick = {HandleRefresh}>Refresh</button>
        <div>
            Hello  medications
        </div>
        </>
    )
}

export default Medications;