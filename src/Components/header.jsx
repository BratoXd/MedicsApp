import React from 'react';
import { Grid2 } from '@mui/material';
import doctorImage from '../Assets/Perfil_Neto3.png';

function Header() {
  return (
    <Grid2
      container
      className="bg-cover bg-center h-64 md:h-96"
      style={{
        backgroundImage: `url(${doctorImage})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
    </Grid2>
  );
}

export default Header;
