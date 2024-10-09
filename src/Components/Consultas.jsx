import React from 'react';
import medimacLogo from '../Assets/medimac_Logo.jpg';
function Consultas() {
    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
            {/* Logo y Nombre */}
            <div className="text-center">
                <img src={medimacLogo} alt="Medimac Logo" className="mx-auto w-24 " />
                <h2 className="text-lg font-bold mt-2 text-blue-400">Medimac</h2>
            </div>

            {/* Dirección y botón de Mapa */}
            <div className="mt-4 text-center">
                <p>Av Insurgentes 20, Fraccionamiento Las Americas, Las Américas, 55075 Ecatepec de Morelos, Méx.</p>
                <a
                    href="https://www.google.com/maps?q=Av+Insurgentes+20,+Fraccionamiento+Las+Americas,+55075+Ecatepec+de+Morelos,+Méx."
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
                <p>Primera consulta: <span className="font-bold text-blue-400">$900</span></p>
            </div>
        </div>
    );
}

export default Consultas;
