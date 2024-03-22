import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import Dashboard from './Scenes/Patient/Dashboard/Dashboard';
import Medicalrecords from './Scenes/Patient/MedicalRecords/Medicalrecords';
import Medications from './Scenes/Patient/Medications/Medications';
import Authentication from './Scenes/Patient/Authentication/Authentication';
import Homepage from './Scenes/Homepage/Homepage';
import PDashboard from './Scenes/Practitioner/Dashboard/Dashboard.jsx';
import PatientData from './Scenes/Practitioner/PatientData/PatientData';
import PAuthentication from './Scenes/Practitioner/Authentication/Authentication';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/patient/login"  element = {<Authentication />} />
        <Route path = "/patient/dashboard" element = {<Dashboard />} />
        <Route path = "/patient/medicalRecords" element = {<Medicalrecords />} />
        <Route path = "/patient/medications" element = {<Medications />} />

        <Route path = "/practitioner/login"  element = {<PAuthentication />} />
        <Route path = "/practitioner/dashboard" element = {<PDashboard />} />
        <Route path = "/practitioner/patientdata" element = {<PatientData />} />

      </Routes>
    </div>
  );
}

export default App;
