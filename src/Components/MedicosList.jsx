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
            console.log("soydata 0 " + data[0])
            if (Array.isArray(data) && data.length > 0) {
                console.log("soydata 0", data[0]); // Para depuración
                
                if (data[0].campaña_activa && data[0].google_ads_id) {
                    const script = document.createElement("script");
                    script.async = true;
                    script.src = `https://www.googletagmanager.com/gtag/js?id=${data[0].google_ads_id}`;
                    document.head.appendChild(script);
            
                    const script2 = document.createElement("script");
                    script2.innerHTML = `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${data[0].google_ads_id}');
                    `;
                    document.head.appendChild(script2);
                }
            } else {
                console.error("Error: No se recibieron datos válidos de los médicos");
            }
            

            
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
