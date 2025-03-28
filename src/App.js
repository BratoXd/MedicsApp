import MedicosList from './Components/MedicosList';
import MedicoDetail from './Components/MedicDetail'; // Crear este componente
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 

function DoctorProfile() {


  return (
     //    <div><DoctorForm /></div> 
         
        <Router>
        <Routes>
            <Route path="/" element={<MedicosList />} />
            <Route path="/medico/:id" element={<MedicoDetail />} />
        </Routes>
    </Router>
   
  );
}

export default DoctorProfile;
