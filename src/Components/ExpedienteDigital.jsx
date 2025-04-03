import React, { useState } from "react";
import { Card, CardContent, Table, TableBody, TableCell, TableHead, TableRow, Dialog, DialogActions, DialogContent, DialogTitle,InputLabel } from "@mui/material";
import { Button, TextField } from "@mui/material";
import { Alert, IconButton } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import { Box } from "@mui/material";

const ExpedienteDigital = () => {
    const [paciente, setPaciente] = useState({
        nombre: "Juan Pérez",
        edad: 45,
        contacto: "555-1234",
        alergias: "Penicilina",
        medicamentos: "Metformina",
        foto: "https://faasvdqdeztdukxahrpe.supabase.co/storage/v1/object/public/img-medicos//444487073_8000599733293573_6420336674294869805_n.jpg", // Ruta de ejemplo
    });

    const [historial, setHistorial] = useState([
        { fecha: "2025-03-10", tratamiento: "Limpieza Dental", notas: "Paciente en buen estado" },
        { fecha: "2025-02-20", tratamiento: "Extracción de muela", notas: "Recuperación en curso" },
    ]);

    const [tratamiento, setTratamiento] = useState("");
    const [duracion, setDuracion] = useState("30 min");
    const [nuevoAlergia, setNuevoAlergia] = useState("");
    const [nuevoMedicamento, setNuevoMedicamento] = useState("");
    const [proximaCita, setProximaCita] = useState("");
    const [openAlergia, setOpenAlergia] = useState(false);
    const [openMedicamento, setOpenMedicamento] = useState(false);

    const handleAlergiaAdd = () => {
        // Lógica para agregar alergia
        setPaciente({
            ...paciente,
            alergias: `${paciente.alergias}, ${nuevoAlergia}`,
        });
        setNuevoAlergia("");
        setOpenAlergia(false);
    };

    const handleMedicamentoAdd = () => {
        // Lógica para agregar medicamento
        setPaciente({
            ...paciente,
            medicamentos: `${paciente.medicamentos}, ${nuevoMedicamento}`,
        });
        setNuevoMedicamento("");
        setOpenMedicamento(false);
    };

    return (
        <div className="p-4 space-y-4">
            {/* Ficha de Identificación */}
            <Card sx={{ borderRadius: 2, boxShadow: 3, margin: "auto", maxWidth: 600 }}>
                <CardContent>
                    <Box display="flex" alignItems="center" justifyContent="flex-start">
                        <Box
                            sx={{
                                borderRadius: "20%",
                                width: 200, // Ajuste del tamaño de la foto
                                height: 200, // Ajuste del tamaño de la foto
                                background: `url(${paciente.foto}) no-repeat center/cover`,
                                border: "2px solid #e0e0e0",
                                marginRight: 5, // Reduciendo el espacio entre la foto y el texto
                            }}
                        />
                        <Box>
                            <h2 className="text-xl font-bold">Ficha de Identificación</h2>
                            <p><strong>Nombre:</strong> {paciente.nombre}</p>
                            <p><strong>Edad:</strong> {paciente.edad} años</p>
                            <p><strong>Contacto:</strong> {paciente.contacto}</p>
                            {paciente.alergias && (
                                <Alert severity="warning" sx={{ mt: 1 }}>
                                    ⚠ Alergias: {paciente.alergias}
                                    <IconButton
                                        size="small"
                                        color="primary"
                                        onClick={() => setOpenAlergia(true)}
                                    >
                                        <AddCircleOutline fontSize="small" />
                                    </IconButton>
                                </Alert>
                            )}
                            {paciente.medicamentos && (
                                <Alert severity="info" sx={{ mt: 1 }}>
                                    💊 Medicación: {paciente.medicamentos}
                                    <IconButton
                                        size="small"
                                        color="primary"
                                        onClick={() => setOpenMedicamento(true)}
                                    >
                                        <AddCircleOutline fontSize="small" />
                                    </IconButton>
                                </Alert>
                            )}
                        </Box>
                    </Box>
                </CardContent>
            </Card>


            {/* Historial de Visitas */}
            <Card sx={{ borderRadius: 2, boxShadow: 3, margin: "auto", maxWidth: 600 }}>
                <CardContent>
                    <h2 className="text-xl font-bold">Historial de Visitas</h2>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Fecha</TableCell>
                                <TableCell>Tratamiento</TableCell>
                                <TableCell>Notas</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {historial.map((h, index) => (
                                <TableRow key={index}>
                                    <TableCell>{h.fecha}</TableCell>
                                    <TableCell>{h.tratamiento}</TableCell>
                                    <TableCell>{h.notas}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            {/* Agendar Nueva Cita */}
            <Card sx={{ borderRadius: 2, boxShadow: 3, margin: "auto", maxWidth: 600 }}>
                <CardContent>
                    <h2 className="text-xl font-bold">Agendar Nueva Cita</h2>
                    <InputLabel id="tratamiento-label">Tratamiento</InputLabel>
                    <Select
                    
                        value={tratamiento}
                        onChange={(e) => setTratamiento(e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                    >
                        <MenuItem value="Limpieza Dental">Limpieza Dental</MenuItem>
                        <MenuItem value="Extracción de muela">Extracción de muela</MenuItem>
                        <MenuItem value="Ortodoncia">Ortodoncia</MenuItem>
                    </Select>
                    <InputLabel id="tratamiento-label">Duracion</InputLabel>
                    <Select
                      InputLabelProps={{
                        shrink: true, // Asegura que el label se posicione dentro del cuadro
                      }}
                        value={duracion}
                        onChange={(e) => setDuracion(e.target.value)}
                        fullWidth
                        sx={{ mb: 2 }}
                    >
                        <MenuItem value="30 min">30 min</MenuItem>
                        <MenuItem value="1 hora">1 hora</MenuItem>
                        <MenuItem value="1 hora 30 min">1 hora 30 min</MenuItem>
                    </Select>

                    <TextField
                        label="Próxima Cita"
                        type="date"
                        value={proximaCita}
                        onChange={(e) => setProximaCita(e.target.value)}
                        fullWidth
                        InputLabelProps={{
                            shrink: true, // Asegura que el label siempre se posicione arriba
                        }}
                        sx={{ mb: 2, mt: 2 }}
                    />

                    <Button variant="contained" color="primary">Agendar Cita</Button>
                </CardContent>
            </Card>

            {/* Modal for adding new alergia */}
            <Dialog open={openAlergia} onClose={() => setOpenAlergia(false)}>
                <DialogTitle>Agregar Alergia</DialogTitle>
                <DialogContent>
                    <TextField
                        value={nuevoAlergia}
                        onChange={(e) => setNuevoAlergia(e.target.value)}
                        label="Nueva Alergia"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleAlergiaAdd}>Guardar</Button>
                    <Button onClick={() => setOpenAlergia(false)}>Cancelar</Button>
                </DialogActions>
            </Dialog>

            {/* Modal for adding new medicamento */}
            <Dialog open={openMedicamento} onClose={() => setOpenMedicamento(false)}>
                <DialogTitle>Agregar Medicamento</DialogTitle>
                <DialogContent>
                    <TextField
                        value={nuevoMedicamento}
                        onChange={(e) => setNuevoMedicamento(e.target.value)}
                        label="Nuevo Medicamento"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleMedicamentoAdd}>Guardar</Button>
                    <Button onClick={() => setOpenMedicamento(false)}>Cancelar</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ExpedienteDigital;
