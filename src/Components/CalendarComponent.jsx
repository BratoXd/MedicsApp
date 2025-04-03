import React, { useState } from "react";
import { Card, CardContent, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CancelIcon from '@mui/icons-material/Cancel';
import InfoIcon from '@mui/icons-material/Info';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const CalendarComponent = () => {
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [openModal, setOpenModal] = useState(false);

    const events = [
        {
            title: "Cita con Juan Pérez",
            date: "2025-04-05",
            costo: "$500",
            paciente: "Juan Pérez",
            estadoPago: "Pagado",
            notas: "Revisión anual",
        },
        {
            title: "Cita con María López",
            date: "2025-04-06",
            costo: "$700",
            paciente: "María López",
            estadoPago: "Pendiente",
            notas: "Extracción de muela",
        },
        {
            title: "Cita con Pedro Ruiz",
            date: "2025-04-07",
            costo: "$600",
            paciente: "Pedro Ruiz",
            estadoPago: "Pagado",
            notas: "Limpieza dental",
        },
        // Agrega más eventos aquí
    ];

    const handleEventClick = (event) => {
        setSelectedEvent(event);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedEvent(null);
    };

    return (
        <Card sx={{ borderRadius: 2, boxShadow: 3, margin: "auto", maxWidth: 600 }}>
            <CardContent>
                <Box sx={{ width: '100%', margin: 'auto', marginTop: 4 }}>
                    <Typography variant="h4" align="center" sx={{ marginBottom: 0 }}>
                        Agenda de Citas
                    </Typography>

                    {/* Tabla de citas */}
                    <TableContainer sx={{ marginBottom: 1 }}>
  <Table sx={{ minWidth: '100%', tableLayout: 'fixed' }}>
    <TableHead>
      <TableRow>
        <TableCell>Fecha</TableCell>
        <TableCell>Paciente</TableCell>
        <TableCell>Costo</TableCell>
        <TableCell>Estado de Pago</TableCell>
        <TableCell>Acción</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {events.map((event) => (
        <TableRow key={event.title}>
          <TableCell sx={{ padding: '4px 8px' }}>{event.date}</TableCell> {/* Reducir padding */}
          <TableCell sx={{ padding: '4px 8px' }}>{event.paciente}</TableCell> {/* Reducir padding */}
          <TableCell sx={{ padding: '4px 8px' }}>{event.costo}</TableCell> {/* Reducir padding */}
          <TableCell sx={{ padding: '4px 8px' }}>{event.estadoPago}</TableCell> {/* Reducir padding */}
          <TableCell sx={{ padding: '4px 8px' }}>
            {/* Contenedor de los botones */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)', // Para que quepan los botones en una fila
              gap: 0.5,
              '@media (max-width: 600px)': {
                gridTemplateColumns: 'repeat(2, 1fr)', // En pantallas más pequeñas, también 4 botones por fila
              },
            }}>
              <Button variant="outlined" color="black" onClick={() => handleEventClick(event)} sx={{ padding: '4px', fontSize: '0.7rem' }}>
                <MenuIcon sx={{ fontSize: '1rem' }} /> {/* Ícono más pequeño */}
              </Button>
              <Button variant="outlined" color="error" onClick={() => handleEventClick(event)} sx={{ padding: '4px', fontSize: '0.7rem', width: 'min-content' }}>
                <CancelIcon sx={{ fontSize: '1rem' }} /> {/* Ícono más pequeño */}
              </Button>
              <Button variant="outlined" color="info" onClick={() => handleEventClick(event)} sx={{ padding: '4px', fontSize: '0.7rem' }}>
                <InfoIcon sx={{ fontSize: '1rem' }} /> {/* Ícono más pequeño */}
              </Button>
              <Button variant="outlined" color="success" onClick={() => handleEventClick(event)} sx={{ padding: '4px', fontSize: '0.7rem' }}>
                <WhatsAppIcon sx={{ fontSize: '1rem' }} /> {/* Ícono más pequeño */}
              </Button>
            </Box>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>


                    {/* Modal de detalles */}
                    <Dialog open={openModal} onClose={handleCloseModal}>
                        <DialogTitle>Detalles de la Cita</DialogTitle>
                        <DialogContent>
                            {selectedEvent && (
                                <Box>
                                    <Typography variant="h6">Paciente: {selectedEvent.paciente}</Typography>
                                    <Typography variant="body1"><strong>Fecha:</strong> {selectedEvent.date}</Typography>
                                    <Typography variant="body1"><strong>Costo:</strong> {selectedEvent.costo}</Typography>
                                    <Typography variant="body1"><strong>Estado de Pago:</strong> {selectedEvent.estadoPago}</Typography>
                                    <Typography variant="body1"><strong>Notas:</strong> {selectedEvent.notas}</Typography>
                                </Box>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleCloseModal} color="primary">Cerrar</Button>
                        </DialogActions>
                    </Dialog>
                </Box>
            </CardContent>
        </Card>
    );
};

export default CalendarComponent;
