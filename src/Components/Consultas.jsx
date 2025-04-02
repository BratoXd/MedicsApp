import React from 'react';
import medimacLogo from '../Assets/medimac_Logo.jpg';
function Consultas() {
    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
            {/* Logo y Nombre */}
            <div className="text-center">
                <img src={medimacLogo} alt="Medimac Logo" className="mx-auto w-24 " />
                <h2 className="text-lg font-bold mt-2 text-blue-400">Consultorio Pediatrico</h2>
            </div>

            {/* Dirección y botón de Mapa */}
            <div className="mt-4 text-center">
                <p>Naranjos S/N, colonia el Carmen, 55024 Ecatepec de Morelos, Méx.</p>
                <a
                    href="
                    https://www.google.com/maps/place/Consultorio+Pediatrico,+Naranjos+S%2FN,+colonia+el+Carmen,+55024+Ecatepec+de+Morelos,+M%C3%A9x./data=!4m2!3m1!1s0x85d1f1c22e32242d:0x51e49acf780ac43?utm_source=mstt_1&entry=gps&coh=192189&g_ep=CAESBzI1LjEyLjEYACCenQoqbCw5NDI0MjU1OSw5NDIyMzI5OSw5NDIxNjQxMyw5NDIxMjQ5Niw5NDIwNzM5NCw5NDIwNzUwNiw5NDIwODUwNiw5NDIxNzUyMyw5NDIxODY1Myw5NDIyOTgzOSw0NzA4NDM5Myw5NDIxMzIwMEICTVg%3D&skid=34c2d770-56b4-4f20-b753-85e980e61104&g_st=aw
                    "
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
                <p>Primera consulta: <span className="font-bold text-blue-400">$500-$700</span></p>
            </div>
        </div>
    );
}

export default Consultas;
