import React from 'react';
import { Container } from '@mui/material';

function MedicCard({ currentMedic }) {
    return (
        <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
            <div className="rounded-lg w-[850px] h-40 bg-[#6893f9] text-white shadow-lg flex items-center px-6">
                {/* Imagen del médico */}
                <img 
                    src={currentMedic.imageUrl} 
                    alt="Imagen del Médico" 
                    className="w-24 h-24 rounded-full object-cover border-4 border-white flex-shrink-0"
                />
                
                {/* Información del médico */}
                <div className="ml-6">
                    <div className="font-bold text-3xl">{currentMedic.DrName}</div>
                    <div className="text-2xl">{currentMedic.Charge}</div>
                </div>
            </div>
        </Container>
    );
}

export default MedicCard;
