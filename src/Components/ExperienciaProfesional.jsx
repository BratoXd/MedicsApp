import React from 'react';
import './App.css';
function ExperienciaProfesional() {
    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
            {/* Experiencia Profesional */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Experiencia Profesional</h3>
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                    <li >Médico cirujano egresado de la Universidad Justo Sierra en Medicina</li>   
 
                </ul>
 
            </div>

            {/* Especialización */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Especialización</h3>
 
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                    <li >Alta especialidad en Cirugía Neonatal en el Instituto Nacional de Perinatología 'Dr. Isidro Espinosa de los Reyes</li>   
                </ul>


            </div>

            {/* Logros Académicos Destacados */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Logros Académicos Destacados</h3>
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                    <li >Competencias en microcirugía por el Instituto Nacional de Cancerología.</li>
                    <li>Médico cirujano pediatra del Hospital General de México 'Dr. Eduardo Liceaga'.</li>
                    <li>Competencias en cirugía laparoscópica por la Universidad Panamericana</li>
                    <li>Cirujano pediatra egresado del Centro Médico Nacional Siglo XXI</li>
                    <li>Especialista en cirugía pediátrica.</li>
                    <li>Competencias en cirugía laparoscópica por la Universidad Panamericana</li>
                </ul>
            </div>
 
            {/* Idiomas */}
            <div className="mb-4">
 
                </div>
                <div className="mb-4">
                <p className="text-lg font-semibold text-blue-900">Atención a la zona metropolitana y a la Ciudad de México.</p>
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                    <li >Atención de excelencia en diagnóstico y tratamiento quirúrgico en niños de 0 a 18 años.</li>
 
                </ul>
            </div>

 
        </div>
    );
}

export default ExperienciaProfesional;
