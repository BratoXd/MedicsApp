import React from 'react';
import './App.css';
function ExperienciaProfesional({ medico } ) {    
    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
            {/* Experiencia Profesional */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Experiencia Profesional</h3>
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                 
                 
                                 {medico.ExperienciaProfesional.map((exp) => (
                                     <li key={exp.id}>
                                         {/* Agregar un Link para redirigir a la página del médico */}
                                            {exp.name}
                                     </li>
                                 ))}
                 
         
                </ul>
 
            </div>

            {/* Especialización */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Especialización</h3>
 
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                {medico.Especializaciones.map((esp) => (
                                     <li key={esp.id}>
                                         {/* Agregar un Link para redirigir a la página del médico */}
                                            {esp.name}
                                     </li>
                                 ))}
                </ul>


            </div>

            {/* Logros Académicos Destacados */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Logros Académicos Destacados</h3>
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                {medico.Logros.map((log) => (
                                     <li key={log.id}>
                                         {/* Agregar un Link para redirigir a la página del médico */}
                                            {log.name}
                                     </li>
                                 ))}
                </ul>
            </div>
 
            {/* Idiomas */}
            <div className="mb-4">
 
                </div>
                <div className="mb-4">
                <p className="text-lg font-semibold text-blue-900">Atención en la  Ciudad de México y zona metropolitana.</p>
 
            </div>

 
        </div>
    );
}

export default ExperienciaProfesional;
