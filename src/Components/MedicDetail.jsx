import React, { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './header';
import ContactCard from './ContactCard';
import Consultas from './Consultas';
import CV from './ExperienciaProfesional';
import Tratamientos from './tratamientos';
import Calendario from './Calendario'; // Importa el nuevo componente
import DoctorForm from './DoctorForm';
import { useParams } from 'react-router-dom';

const MedicoDetail = () => {
    const { id } = useParams(); // Obtener el ID de la URL
    const [medico, setMedico] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isSticky, setIsSticky] = useState(false); // Estado para saber si el banner es sticky
 

    useEffect(() => {
        const fetchMedico = async () => {
            try {
                const response = await fetch(`https://be-medicapp.onrender.com/medicos/${id}`);
                if (!response.ok) {
                    throw new Error('No se pudo obtener la información del médico');
                }
                const data = await response.json();
                setMedico(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchMedico();
    }, [id]);

    // Manejamos los estados antes de renderizar el contenido
    if (loading) {
        return <p>Cargando...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    if (!medico) {
        return <p>No se encontró el médico.</p>;
    }

    return (
        <Container maxWidth="lg">
            <Header medico= { medico}/>
            <div className={`contact-banner ${isSticky ? 'sticky' : ''}`}>
                <ContactCard setIsSticky={setIsSticky}  medico= { medico}/>
    
 
                <div className="card"><Consultas medico= { medico} /></div>
                <div className="card"><CV medico= { medico}/></div>
                <div className="card"><Calendario medico= { medico} /></div>
            </div>
        </Container>
          //      <div className="card"><Tratamientos medico= { medico}/></div>
        //  <div><DoctorForm /></div> 
        //   <div>         <MedicosList /></div> 

    );
};

export default MedicoDetail;
