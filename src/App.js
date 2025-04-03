import MedicosList from './Components/MedicosList';
import ExpedienteDigital from './Components/ExpedienteDigital';
import CalendarComponent from './Components/CalendarComponent';
import MedicoDetail from './Components/MedicDetail'; // Crear este componente
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DoctorForm from './Components/DoctorForm';

function DoctorProfile() {


  return (
 
 
       <Router>
        <Routes>
        <Route path="/" element={<MedicosList />} />
         
        <Route path="/agenda" element={<CalendarComponent />} />
            <Route path="/digitalExp" element={<ExpedienteDigital />} />
            <Route path="/medico/:id" element={<MedicoDetail />} />
            <Route path="/addDoctorForm" element={<DoctorForm />} />
        </Routes>
    </Router>  
  
  );
}

export default DoctorProfile;
