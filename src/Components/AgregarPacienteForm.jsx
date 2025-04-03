import React, { useState } from 'react';
import { Button, TextField, Grid, Box, Typography, CircularProgress } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';

const AgregarPacienteForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    fechaNacimiento: '',
    genero: '',
    telefono: '',
    correo: '',
    direccion: '',
    alergias: '',
    medicamentos: '',
    foto: null,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Manejador de cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Función para manejar la foto (imagen)
  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      foto: e.target.files[0],
    });
  };

  // Función para enviar el formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Activar spinner
    setSuccess(false); // Resetear estado de éxito
    setError(''); // Resetear mensaje de error

    const form = new FormData();
    form.append('nombre', formData.nombre);
    form.append('fechaNacimiento', formData.fechaNacimiento);
    form.append('genero', formData.genero);
    form.append('telefono', formData.telefono);
    form.append('correo', formData.correo);
    form.append('direccion', formData.direccion);
    form.append('alergias', formData.alergias);
    form.append('medicamentos', formData.medicamentos);
    form.append('foto', formData.foto);

    try {
      const response = await fetch('https://be-medicapp.onrender.com/InsertarPaciente', {
        method: 'POST',
        body: form,
      });

      if (!response.ok) {
        throw new Error('Error en la red');
      }

      await response.json();
      console.log('Datos guardados exitosamente.');

      // Limpiar formulario después de enviar
      setFormData({
        nombre: '',
        fechaNacimiento: '',
        genero: '',
        telefono: '',
        correo: '',
        direccion: '',
        alergias: '',
        medicamentos: '',
        foto: null,
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
        Agregar Paciente
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre Completo"
              variant="outlined"
              fullWidth
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Fecha de Nacimiento"
              variant="outlined"
              type="date"
              fullWidth
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Género"
              variant="outlined"
              fullWidth
              name="genero"
              value={formData.genero}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Teléfono"
              variant="outlined"
              fullWidth
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Correo Electrónico"
              variant="outlined"
              fullWidth
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              required
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              label="Dirección"
              variant="outlined"
              fullWidth
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Alergias"
              variant="outlined"
              fullWidth
              name="alergias"
              value={formData.alergias}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Medicamentos"
              variant="outlined"
              fullWidth
              name="medicamentos"
              value={formData.medicamentos}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
            <Button
              variant="contained"
              component="label"
              fullWidth
              startIcon={<PhotoCamera />}
            >
              Subir Foto
              <input
                type="file"
                hidden
                onChange={handleImageChange}
              />
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
              {loading ? <CircularProgress size={24} /> : 'Guardar Paciente'}
            </Button>
          </Grid>

          {/* Mensaje de éxito o error */}
          {success && (
            <Grid item xs={12}>
              <Typography variant="body1" color="success.main">
                ¡Datos guardados exitosamente!
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

export default AgregarPacienteForm;
