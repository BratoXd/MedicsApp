import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MedicCard from './MedicCard';


const MedicosList = () => {
    const [medicos, setMedicos] = useState([]);

    useEffect(() => {
        const fetchMedicos = async () => {
            const response = await fetch('https://be-medicapp.onrender.com/medicos');
            const data = await response.json();
            setMedicos(data);
        };
        fetchMedicos();
    }, []);

    return (
        <div>
 
            <ul>
                {medicos.map((medico) => (
                    <li key={medico.id}>
                        {/* Agregar un Link para redirigir a la página del médico */}
                        <Link to={`/medico/${medico.id}`}>
                            <MedicCard currentMedic={medico} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MedicosList;
