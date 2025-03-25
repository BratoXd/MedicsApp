import React, { useState, useEffect } from 'react';
import { FaPhone, FaCalendarAlt, FaTimes } from 'react-icons/fa';
import Calendario from './Calendario';

 

function ContactCard(  {setIsSticky } ) {
    const telefono = '+5215533285931';
    const [isCalendarioVisible, setLocalCalendarioVisible] = useState(false);

    const abrirCalendario = () => {
        setLocalCalendarioVisible(true);
        setIsSticky(false);
    };

    const cerrarCalendario = () => {
        setLocalCalendarioVisible(false);
        setIsSticky(true);
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
                    Dr. Prisitas
                </h2>
                <p className="text-sm">
                    Cirugía pediátrica en el Estado de México.
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
                        <div className="flex justify-between items-center mb-4 border-b pb-2">
                            <button
                                onClick={cerrarCalendario}
                                className="text-red-500">
                                <FaTimes />
                            </button>
                        </div>
                        <Calendario />
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactCard;
