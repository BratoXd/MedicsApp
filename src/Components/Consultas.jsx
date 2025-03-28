import React from 'react';
 
function Consultas( { medico } ) {
    if (medico.MedicCenter === null) {
        return null; 
    }
    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
            {/* Logo y Nombre */}
            <div className="text-center">
                <img src={medico.MedicCenter.logoImgUrl} alt="Logo" className="mx-auto w-24 " />
                <h2 className="text-lg font-bold mt-2 text-blue-400">{medico.MedicCenter.logoName}</h2>
            </div>

            {/* Dirección y botón de Mapa */}
            <div className="mt-4 text-center">
                <p> {medico.MedicCenter.adress}</p>
                <a
                    href= {medico.MedicCenter.mapsAdress}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded shadow mt-2"
                >
                    Ver Mapa
                </a>
            </div>

            {/* Precios */}
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-blue-900 ">Precios</h3>
                <p>Primera consulta: <span className="font-bold text-blue-400">{medico.Prize}</span></p>
            </div>
        </div>
    );
}

export default Consultas;
