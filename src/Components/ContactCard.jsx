import React, { useState } from 'react';
import { FaPhone, FaCalendarAlt } from 'react-icons/fa';
import Calendario from './Calendario'; // Asegúrate de importar el componente Calendario
import { FaTimes } from 'react-icons/fa'; // Asegúrate de importar el ícono

function ContactCard() {
    const telefono = '+525579339433'; // Cambia este número por tu número de WhatsApp
    const [isCalendarioVisible, setCalendarioVisible] = useState(false); // Estado para manejar la visibilidad del calendario

    const abrirCalendario = () => {
        setCalendarioVisible(true); // Cambia el estado para mostrar el calendario
    };

    const cerrarCalendario = () => {
        setCalendarioVisible(false); // Cambia el estado para ocultar el calendario
    };

    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
            <div className="text-center">
                <h2 className="text-lg font-bold text-blue-400">
                    Dr. Nestor Gibran Lopez Diaz
                </h2>
                <p className="text-sm">
                    Cirugía pediátrica en el Edo Mex
                </p>
            </div>
            <div className="flex justify-between mt-4">
                {/* Botón Llamar */}
                <a
                    href={`https://wa.me/${telefono}`} // Enlace para WhatsApp
                    target="_blank" // Abre en una nueva pestaña
                    rel="noopener noreferrer" // Seguridad para enlaces externos
                    className="flex items-center bg-green-500 text-white py-2 px-8 rounded shadow"
                >
                    <FaPhone className="mr-2" /> WhatsApp
                </a>

                {/* Botón Reservar */}
                <button 
                    onClick={abrirCalendario} // Agrega el evento onClick
                    className="flex items-center bg-blue-500 text-white py-4 px-8 rounded shadow"
                >
                    <FaCalendarAlt className="mr-2" /> Reservar
                </button>
            </div>

            {/* Modal para el Calendario */}
            {isCalendarioVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-md p-4 shadow-lg relative">
                        <button 
                            onClick={cerrarCalendario} 
                            className="absolute top-2 right-5 text-red-500"
                        >
                        <FaTimes />
                        </button>
                        <Calendario />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactCard;
