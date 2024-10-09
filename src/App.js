import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import Header from './Components/header';
import ContactCard from './Components/ContactCard';
import Consultas from './Components/Consultas';
import CV from './Components/ExperienciaProfesional';
import Tratamientos from './Components/tratamientos';
import Calendario from './Components/Calendario'; // Importa el nuevo componente
function DoctorProfile() {
  const [isSticky, setIsSticky] = useState(false); // Estado para saber si el banner es sticky
  const handleScroll = () => {
    if (window.scrollY > 300) { // Ajusta este valor según la altura de tu tarjeta
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Agregar evento de desplazamiento
    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpiar el evento al desmontar
    };
  }, []);



  return (
    <Container maxWidth="lg">
      <Header />
      <div className={`contact-banner ${isSticky ? 'sticky' : ''}`}>
        <ContactCard />
      </div>
      <div style={{ marginTop: '20px' }}>
        <div className="card"><Consultas /></div>
        <div className="card"><CV /></div>
        <div className="card"><Tratamientos /></div>
        <div className="card"><Calendario /></div> 
      </div>
    </Container>
  );
}

export default DoctorProfile;
