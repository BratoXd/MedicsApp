import React from 'react';

function Calendario() {
    const disponibilidad = {
        Lunes: [
            { horario: '8:00 AM - 9:00 AM' }, 
            { horario: '9:00 AM - 10:00 AM' },
            { horario: '10:00 AM - 11:00 AM' },
            { horario: '11:00 AM - 12:00 PM' },
        ],
        Martes: [
            { horario: '8:00 AM - 9:00 AM' }, 
            { horario: '9:00 AM - 10:00 AM' },
            { horario: '10:00 AM - 11:00 AM' },
            { horario: '11:00 AM - 12:00 PM' },
        ],
        Miércoles: [
            { horario: '8:00 AM - 9:00 AM' }, 
            { horario: '9:00 AM - 10:00 AM' },
            { horario: '10:00 AM - 11:00 AM' },
            { horario: '11:00 AM - 12:00 PM' },
        ],
        Jueves: [
            { horario: '8:00 AM - 9:00 AM' }, 
            { horario: '9:00 AM - 10:00 AM' },
            { horario: '10:00 AM - 11:00 AM' },
            { horario: '11:00 AM - 12:00 PM' },
        ],
        Viernes: [
            { horario: '8:00 AM - 9:00 AM' }, 
            { horario: '9:00 AM - 10:00 AM' },
            { horario: '10:00 AM - 11:00 AM' },
            { horario: '11:00 AM - 12:00 PM' },
        ],
        Sábado: [
            { horario: '9:00 AM - 10:00 AM' },
            { horario: '10:00 AM - 11:00 AM' },
            { horario: '11:00 AM - 12:00 PM' },
            { horario: '12:00 PM - 1:00 PM' },
            { horario: '1:00 PM - 2:00 PM' },
            { horario: '2:00 PM - 3:00 PM' },
            { horario: '3:00 PM - 4:00 PM' },
            { horario: '4:00 PM - 5:00 PM' },
        ],
        Domingo: [], // Sin disponibilidad
    };
    

    const telefono = '+5215533285931';  

    const enviarWhatsApp = (dia, horario) => {
        const mensaje = `Quiero una cita el ${dia} de ${horario}`;
        const enlace = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
        window.open(enlace, '_blank');
    };

    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-bold text-blue-400 text-center">Disponibilidad Semanal</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                {Object.entries(disponibilidad).map(([dia, horarios]) => (
                    <div key={dia} className="border p-2 rounded-md">
                        <h4 className="font-bold text-center">{dia}</h4>
                        {horarios.length > 0 ? (
                            <div className="flex flex-col items-center">
                                {horarios.map((item, index) => (
                                    <button
                                        key={index}
                                        onClick={() => enviarWhatsApp(dia, item.horario)}
                                        className="bg-blue-500 text-white py-2 px-4 rounded mt-2 w-full sm:w-auto"
                                    >
                                        {item.horario}
                                    </button>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-gray-400">No disponible</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Calendario;
