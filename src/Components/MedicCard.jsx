import React from 'react';
import { Container } from '@mui/material';

function MedicCard( {currentMedic } ) {
    return (
        <Container maxWidth="lg" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '20vh' }}>
            <div className="rounded-lg w-[850px] h-40 bg-[#6893f9] text-[#ffffff]">
                <div className="flex flex-row w-full gap-5 justify-center items-center px-6 h-full">
                    <div className="my-auto text-3xl">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-alert-circle" width="88" height="88">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" x2="12" y1="8" y2="12"></line>
                            <line x1="12" x2="12.01" y1="16" y2="16"></line>
                        </svg>
                    </div>
                    <div>
                        <div className="font-bold text-3xl">{currentMedic.DrName}</div>
                        <div className="text-2xl">{currentMedic.Charge}</div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default MedicCard;
