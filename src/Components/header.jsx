import React, { useEffect, useState } from 'react';

import { Grid2 } from '@mui/material';
 

function Header({ medico }) {



  return (
    <Grid2
      container
      className="bg-cover bg-center h-64 md:h-96"
      style={{
        backgroundImage: `url(${medico.imageUrl})`,
        backgroundRepeat: 'no-repeat',
      }}
    >
    </Grid2>
  );
}

export default Header;
