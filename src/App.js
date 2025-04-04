import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, IconButton, AppBar, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import MedicosList from './Components/MedicosList';
import ExpedienteDigital from './Components/ExpedienteDigital';
import CalendarComponent from './Components/AgendaComponent';
import MedicoDetail from './Components/MedicDetail';
import DoctorForm from './Components/DoctorForm';
import AgregarPacienteForm from './Components/AgregarPacienteForm';
import RecetaDigital from './Components/RecetaDigitalForm';
import EvaluacionPaciente from './Components/EvaluacionPaciente';
import VideoCall from './Components/VideoCall';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'leaflet/dist/leaflet.css';




function DoctorProfile() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Router>
<AppBar 
  position="sticky" 
  sx={{ 
    backgroundColor: '#1976d2',  // Azul suave tipo macOS
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' 
  }}
>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={toggleDrawer} sx={{ mr: 2 }}>
            <MenuIcon sx={{ color: 'black' }} />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, color: 'black' }}>
            DocTap
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          width: 250,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: '#fff',
            borderRight: 'none',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Sombra sutil
            position: 'relative',
            zIndex: 1201, // Asegúrate de que no tape la AppBar
          },
        }}
      >
        <List>
          <ListItem
            button
            component={Link}
            to="/"
            sx={{
              padding: '15px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f5', // Cambio de color al pasar el mouse
                cursor: 'pointer', // Cambiar el cursor a pointer
              },
            }}
          >
            <ListItemText primary="Lista de Médicos" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/addDoctorForm"
            sx={{
              padding: '15px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f5',
                cursor: 'pointer',
              },
            }}
          >
            <ListItemText primary="Agregar Doctor" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/agenda"
            sx={{
              padding: '15px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f5',
                cursor: 'pointer',
              },
            }}
          >
            <ListItemText primary="Agenda" />
          </ListItem>

          <ListItem
            button
            component={Link}
            to="/digitalExp"
            sx={{
              padding: '15px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f5',
                cursor: 'pointer',
              },
            }}
          >
            <ListItemText primary="Expediente Digital" />
          </ListItem>


          <ListItem
            button
            component={Link}
            to="/addPatient"
            sx={{
              padding: '15px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f5',
                cursor: 'pointer',
              },
            }}
          >
            <ListItemText primary="Agregar Paciente" />
          </ListItem>


          <ListItem
            button
            component={Link}
            to="/RecetaDigital"
            sx={{
              padding: '15px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f5',
                cursor: 'pointer',
              },
            }}
          >
            <ListItemText primary="Receta Digital" />
          </ListItem>



          <ListItem
            button
            component={Link}
            to="/EvaluacionPaciente"
            sx={{
              padding: '15px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f5',
                cursor: 'pointer',
              },
            }}
          >
            <ListItemText primary="Evaluacion Paciente" />
          </ListItem>



          <ListItem
            button
            component={Link}
            to="/VideoCall"
            sx={{
              padding: '15px 20px',
              '&:hover': {
                backgroundColor: '#f0f0f5',
                cursor: 'pointer',
              },
            }}
          >
            <ListItemText primary="Video Llamada" />
          </ListItem>

        </List>



        
      </Drawer>

      <Routes>
        <Route path="/" element={<MedicosList />} />
        <Route path="/agenda" element={<CalendarComponent />} />
        <Route path="/digitalExp" element={<ExpedienteDigital />} />
        <Route path="/medico/:id" element={<MedicoDetail />} />
        <Route path="/addDoctorForm" element={<DoctorForm />} />
        <Route path="/addPatient" element={<AgregarPacienteForm />} />
        <Route path="/RecetaDigital" element={<RecetaDigital />} />
        <Route path="/EvaluacionPaciente" element={<EvaluacionPaciente />} />
        <Route path="/VideoCall" element={<VideoCall />} />
      </Routes>
    </Router>
  );
}

export default DoctorProfile;
