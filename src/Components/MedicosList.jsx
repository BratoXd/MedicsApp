import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MedicCard from './MedicCard';


const MedicosList = () => {
    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        const fetchMedicos = async () => {
            const response = await fetch('http://localhost:4000/medicos');
            const data = await response.json();
            setMedicos(data);
        };
        fetchMedicos();
    }, []);

    return (
        <div>
            <h1>Médicos Disponibles</h1>
            <ul>
                {medicos.map((medico) => (
                    <li key={medico.id}>
                     <div><MedicCard currentMedic = {medico }  /></div> 
                     
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicosList;
