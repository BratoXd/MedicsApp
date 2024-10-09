import React from 'react';

function Tratamientos() {
 
    const tratamientos = [
        { nombre: 'Apendicitis', enlace: 'https://es.wikipedia.org/wiki/Apendicitis' },
        { nombre: 'Circuncisión', enlace: 'https://es.wikipedia.org/wiki/Circuncisi%C3%B3n' },
        { nombre: 'Cirugía de la Hernia Inguinal', enlace: 'https://es.wikipedia.org/wiki/Hernia_inguinal' },        
        { nombre: 'Criptorquidia', enlace: 'https://es.wikipedia.org/wiki/Criptorquidia' },
        { nombre: 'Estreñimiento', enlace: 'https://es.wikipedia.org/wiki/Estre%C3%B1imiento' },
        { nombre: 'Malformaciones Congénitas', enlace: 'https://es.wikipedia.org/wiki/Malformaciones_cong%C3%A9nitas' },
        { nombre: 'Cirugía de la Hernia Umbilical', enlace: 'https://es.wikipedia.org/wiki/Hernia_umbilical' }
    ];

    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
 
 
            <h4 className="text-lg font-semibold text-blue-900">El doctor es experto en:</h4>
            <br></br>
            <div className="flex flex-wrap">
                {tratamientos.map((tratamiento, index) => (
                    <a
                        key={index}
                        href={tratamiento.enlace}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-4 mb-4"
                    >
                        {tratamiento.nombre}
                    </a>
                ))}
            </div>
 
        </div>
    );
}

export default Tratamientos;
