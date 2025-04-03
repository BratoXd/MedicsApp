import React, { useState } from 'react';
import { Button, TextField, Grid, Box, Typography, MenuItem, FormControl, Select, InputLabel, CircularProgress } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const RecetaDigitalForm = ({ pacienteId, medicamentos }) => {
    const [formData, setFormData] = useState({
        medicamento: '',
        dosis: '',
        indicaciones: '',
        firma: null,
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    // Manejo de cambios en los campos del formulario
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Manejo de la firma digital
    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            firma: e.target.files[0],
        });
    };

    // Enviar la receta al backend
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Activar spinner
        setSuccess(false); // Resetear estado de éxito
        setError(''); // Resetear mensaje de error

        const form = new FormData();
        form.append('pacienteId', pacienteId);
        form.append('medicamento', formData.medicamento);
        form.append('dosis', formData.dosis);
        form.append('indicaciones', formData.indicaciones);
        form.append('firma', formData.firma);

        try {
            const response = await fetch('https://be-medicapp.onrender.com/InsertarReceta', {
                method: 'POST',
                body: form,
            });

            if (!response.ok) {
                throw new Error('Error al guardar la receta');
            }

            await response.json();
            console.log('Receta guardada exitosamente.');

            // Limpiar formulario después de enviar
            setFormData({
                medicamento: '',
                dosis: '',
                indicaciones: '',
                firma: null,
            });

            setSuccess(true); // Mostrar mensaje de éxito
        } catch (error) {
            console.error('Error:', error);
            setError(error.message); // Mostrar mensaje de error
        } finally {
            setLoading(false); // Desactivar spinner
        }
    };

    return (
        <Box sx={{ padding: 3 }}>
            <Typography variant="h5" gutterBottom>
                Crear Receta Digital
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label="Medicamento"
                                variant="outlined"
                                fullWidth
                                name="dosis"
                                value={formData.dosis}
                                onChange={handleChange}
                                required
                            />
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Dosis"
                            variant="outlined"
                            fullWidth
                            name="dosis"
                            value={formData.dosis}
                            onChange={handleChange}
                            required
                        />
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label="Indicaciones"
                            variant="outlined"
                            fullWidth
                            name="indicaciones"
                            value={formData.indicaciones}
                            onChange={handleChange}
                            multiline
                            rows={4}
                            required
                        />
                    </Grid>

 
                    <Grid item xs={12}>
                        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
                            {loading ? <CircularProgress size={24} /> : 'Generar Receta'}
                        </Button>
                    </Grid>

                    {/* Mensaje de éxito o error */}
                    {success && (
                        <Grid item xs={12}>
                            <Typography variant="body1" color="success.main">
                                ¡Receta guardada exitosamente!
                            </Typography>
                        </Grid>
                    )}

                    {error && (
                        <Grid item xs={12}>
                            <Typography variant="body1" color="error.main">
                                {`Error: ${error}`}
                            </Typography>
                        </Grid>
                    )}
                </Grid>
            </form>
        </Box>
    );
};

export default RecetaDigitalForm;
