import React from 'react';
import './App.css';
function ExperienciaProfesional() {
    return (
        <div className="mt-4 p-6 bg-white shadow-md rounded-md">
            {/* Experiencia Profesional */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Experiencia Profesional</h3>
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                    <li >11 años de experiencia</li>   
                    <li >Cirujano Pediatra. Medimac Actualidad</li>   
                </ul>
 
            </div>

            {/* Especialización */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Especialización</h3>
 
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                    <li >Cirugía Pediátrica</li>   
                </ul>


            </div>

            {/* Logros Académicos Destacados */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Logros Académicos Destacados</h3>
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                    <li >Maestría. Dirección y Gestión de Instituciones de Salud. Universidad Anáhuac. Ciudad de México, México. 2024</li>
                    <li>Especialidad. Gestión en la Salud y el Bienestar Corporativo. Universidad Anáhuac Sede Ciudad de México. Ciudad de México, México. 2022</li>
                    <li>Especialidad. Cirugía Pediátrica. Universidad Nacional Autónoma de México (UNAM). Ciudad de México, México. 2020</li>
                    <li>Especialidad. Pediatría. Universidad Nacional Autónoma de México (UNAM). Ciudad de México, México. 2018</li>
                    <li>Licenciatura. Médico Cirujano. Universidad la Salle (ULSA). Ciudad de México, México. 2013</li>
                </ul>
            </div>
 
            {/* Idiomas */}
            <div className="mb-4">
                <h3 className="text-lg font-semibold text-blue-900">Idiomas</h3>
                <ul className=" list-disc list-inside mt-1 text-sm text-gray-600 custom-list">
                    <li >Cirugía Pediátrica</li>   
                </ul>

                </div>
                <div className="mb-4">
                <p className="text-lg font-semibold text-blue-900">Cédula Profesional: </p>
                <p className="text-gray-600 text-sm">   8048095, 11214903, 11979938, 12706697, 13962959</p>
            </div>

 
        </div>
    );
}

export default ExperienciaProfesional;
