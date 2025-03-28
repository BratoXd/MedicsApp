import React from 'react';

function Tratamientos({ medico } ) {
    const tratamientos = medico?.medico_padecimientoPediatrico || [];
 
    if (tratamientos.length === 0) {
        return null; 
    }
    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
 
 
            <h4 className="text-lg font-semibold text-blue-900">Atención en:</h4>
            <br></br>
            <div className="flex flex-wrap">
                
                {tratamientos.map((tratamiento, index) => (
                    <a
                        key={index}
                        href={tratamiento.padecimientoPediatriaco.Url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded mr-4 mb-4"
                    >
                        {tratamiento.padecimientoPediatriaco.name}
                    </a>
                ))}
            </div>
 
        </div>
    );
}

export default Tratamientos;
