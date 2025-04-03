import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, TextField, CircularProgress, Rating } from '@mui/material';

const EvaluacionPaciente = ({ doctorId }) => {
  const [rating, setRating] = useState(0);
  const [comentario, setComentario] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [evaluaciones, setEvaluaciones] = useState([]);
  const [promedio, setPromedio] = useState(0);

  // Cargar evaluaciones previas
  useEffect(() => {
    const fetchEvaluaciones = async () => {
      try {
        const response = await fetch(`https://be-medicapp.onrender.com/GetEvaluaciones?doctorId=${doctorId}`);
        const data = await response.json();
        setEvaluaciones(data);

        // Calcular el promedio de estrellas
        if (data.length > 0) {
          const sumaEstrellas = data.reduce((acc, evaluacion) => acc + evaluacion.rating, 0);
          setPromedio(sumaEstrellas / data.length);
        }
      } catch (error) {
        console.error('Error al obtener evaluaciones:', error);
      }
    };

    fetchEvaluaciones();
  }, [doctorId]);

  // Enviar la evaluación a la API
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError('');

    const data = {
      doctorId,
      rating,
      comentario
    };

    try {
      const response = await fetch('https://be-medicapp.onrender.com/InsertarEvaluacion', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (!response.ok) throw new Error('Error al enviar evaluación');

      // Agregar la nueva evaluación a la lista
      setEvaluaciones([...evaluaciones, data]);
      setPromedio((promedio * evaluaciones.length + rating) / (evaluaciones.length + 1));

      setSuccess(true);
      setRating(0);
      setComentario('');
    } catch (error) {
      console.error('Error:', error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ p: 3, border: '1px solid #ddd', borderRadius: 2 }}>
      <Typography variant="h6">Deja tu evaluación</Typography>

      <form onSubmit={handleSubmit}>
        <Rating
          name="rating"
          value={rating}
          onChange={(event, newValue) => setRating(newValue)}
          size="large"
        />
        <TextField
          label="Comentario (opcional)"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          sx={{ my: 2 }}
        />

        <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Enviar evaluación'}
        </Button>

        {success && (
          <Typography variant="body2" color="success.main" sx={{ mt: 1 }}>
            ¡Evaluación enviada exitosamente!
          </Typography>
        )}

        {error && (
          <Typography variant="body2" color="error.main" sx={{ mt: 1 }}>
            {error}
          </Typography>
        )}
      </form>

      {/* Mostrar el promedio de estrellas */}
      <Typography variant="h6" sx={{ mt: 3 }}>
        Calificación promedio: {promedio.toFixed(1)} ⭐
      </Typography>

      {/* Mostrar las evaluaciones previas */}
      {evaluaciones.length > 0 && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="subtitle1">Reseñas de otros pacientes:</Typography>
          {evaluaciones.map((evaluacion, index) => (
            <Box key={index} sx={{ borderBottom: '1px solid #ddd', py: 1 }}>
              <Rating value={evaluacion.rating} readOnly size="small" />
              <Typography variant="body2">{evaluacion.comentario}</Typography>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default EvaluacionPaciente;
