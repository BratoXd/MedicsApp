import React, { useState, useEffect } from 'react';
import { FaPhone, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import Calendario from './Calendario';



function ContactCard({ setIsSticky, medico }) {
    const telefono = medico.Phone;
    const [isCalendarioVisible, setLocalCalendarioVisible] = useState(false);

    const abrirCalendario = () => {
        setLocalCalendarioVisible(true);

    };

    const cerrarCalendario = () => {
        setLocalCalendarioVisible(false);

    };


    useEffect(() => {
        if (isCalendarioVisible) {

            document.body.style.overflow = 'hidden';
        } else {

            document.body.style.overflow = 'auto';

        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isCalendarioVisible]);


    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
            <div className="text-center">
                <h2 className="text-lg font-bold text-blue-400">
                    Dr.  {medico.DrName}
                </h2>
                <p className="text-sm">
                    {medico.Charge}
                </p>
            </div>
            <div className="flex justify-between mt-4">
                <a
                    href={`https://wa.me/${telefono}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-green-500 text-white py-2 px-8 rounded shadow"
                >
                    <FaPhone className="mr-2" /> WhatsApp
                </a>

                {/* Botón Reservar */}
                <button
                    onClick={abrirCalendario}
                    className="flex items-center bg-blue-500 text-white py-4 px-8 rounded shadow"
                >
                    <FaCalendarAlt className="mr-2" /> Reservar
                </button>
            </div>

            {/* Modal para el Calendario */}
            {isCalendarioVisible && (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-md p-4 shadow-lg relative max-h-[80%] overflow-y-auto w-full md:w-1/2">
            {/* Botón de cerrar con fondo translúcido y borde redondeado */}
            <div className="sticky top-0 left-0 right-0 flex justify-start p-2 z-50">
                <button 
                    onClick={cerrarCalendario} 
                    className="bg-gray-800 bg-opacity-50 text-white p-2 rounded-full shadow-md hover:bg-opacity-75 transition duration-200"
                >
                    <FaTimes className="text-lg" />
                </button>
            </div>

            <Calendario medico={medico} />
        </div>
    </div>
)}
        </div>
    );
}

export default ContactCard;
