import React from 'react';

function Tratamientos() {
    const tratamientos = [
        { nombre: 'Apendicitis', enlace: 'https://es.wikipedia.org/wiki/Apendicitis' },
        { nombre: 'Hernia inguinal', enlace: 'https://es.wikipedia.org/wiki/Hernia_inguinal' },
        { nombre: 'Hernia umbilical', enlace: 'https://es.wikipedia.org/wiki/Hernia_umbilical' },
        { nombre: 'Testículo no descendido', enlace: 'https://es.wikipedia.org/wiki/Criptorquidia' },
        { nombre: 'Hidrocele', enlace: 'https://es.wikipedia.org/wiki/Hidrocele' },
        { nombre: 'Reflujo gastroesofágico', enlace: 'https://es.wikipedia.org/wiki/Reflujo_gastroesof%C3%A1gico' },
        { nombre: 'Tumores', enlace: 'https://es.wikipedia.org/wiki/Tumor' },
        { nombre: 'Atresia esofágica', enlace: 'https://es.wikipedia.org/wiki/Atresia_esof%C3%A1gica' },
        { nombre: 'Atresia intestinal', enlace: 'https://es.wikipedia.org/wiki/Atresia_intestinal' },
        { nombre: 'Abdomen agudo', enlace: 'https://es.wikipedia.org/wiki/Abdomen_agudo' },
        { nombre: 'Gastrosquisis/Onfalocele', enlace: 'https://es.wikipedia.org/wiki/Gastrosquisis' },
        { nombre: 'Colocación de accesos vasculares', enlace: 'https://es.wikipedia.org/wiki/Acceso_vascular' },
        { nombre: 'Urgencias médico-quirúrgicas', enlace: 'https://es.wikipedia.org/wiki/Urgencia_m%C3%A9dico-quir%C3%BArgica' }
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
