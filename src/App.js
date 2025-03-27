import React, { useState, useEffect } from 'react';

import MedicosList from './Components/MedicosList';
import MedicoDetail from './Components/MedicDetail'; // Crear este componente
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 

function DoctorProfile() {


  return (

        <Router>
        <Routes>
            <Route path="/" element={<MedicosList />} />
            <Route path="/medico/:id" element={<MedicoDetail />} />
        </Routes>
    </Router>
   
  );
}

export default DoctorProfile;
