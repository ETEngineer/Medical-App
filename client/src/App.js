import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import Dashboard from './Scenes/Patient/Dashboard/Dashboard';
import Medicalrecords from './Scenes/Patient/MedicalRecords/Medicalrecords';
import Medications from './Scenes/Patient/Medications/Medications';
import Authentication from './Scenes/Patient/Authentication/Authentication';
import Homepage from './Scenes/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Homepage />} />
        <Route path = "/patient/login"  element = {<Authentication />} />
        <Route path = "/patient/dashboard" element = {<Dashboard />} />
        <Route path = "/patient/medicalRecords" element = {<Medicalrecords />} />
        <Route path = "/patient/medications" element = {<Medications />} />
      </Routes>
    </div>
  );
}

export default App;
