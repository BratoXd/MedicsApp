import React, { useState } from "react";
import { TextField, Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DoctorForm = () => {
    const [formData, setFormData] = useState({
        DrName: '',
        Charge: '',
        Phone: '',
        Prize: '',
        Services: '',
        imagen: null
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate(); // Hook para navegación

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({...formData, imagen: e.target.files[0]});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Activar spinner
        setSuccess(false); // Resetear estado de éxito

        const form = new FormData();
        form.append("DrName", formData.DrName);
        form.append("Charge", formData.Charge);
        form.append("Phone", formData.Phone);
        form.append("Prize", formData.Prize);
        form.append("Services", formData.Services);
        form.append("imagen", formData.imagen);

        try {
            const response = await fetch('https://be-medicapp.onrender.com/InsertarTempMedicos', {
                method: 'POST',
                body: form
            });

            if (!response.ok) {
                throw new Error('Error en la red');
            }

            await response.json();
            console.log("Datos guardados exitosamente.");

            // Limpiar formulario después de enviar
            setFormData({
                DrName: '',
                Charge: '',
                Phone: '',
                Prize: '',
                Services: '',
                imagen: null
            });

            setSuccess(true); // Mostrar mensaje de éxito
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false); // Desactivar spinner
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl mb-4 text-center">Formulario de Médico</h2>

            {!success ? (
                <>
                    <TextField
                        label="Nombre del Doctor"
                        name="DrName"
                        value={formData.DrName}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Cargo"
                        name="Charge"
                        value={formData.Charge}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Teléfono"
                        name="Phone"
                        type="tel"
                        value={formData.Phone}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        label="Precio"
                        name="Prize"
                        type="number"
                        value={formData.Prize}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Servicios"
                        name="Services"
                        value={formData.Services}
                        onChange={handleChange}
                        fullWidth
                        margin="normal"
                    />
                    <input
                        type="file"
                        name="imagen"
                        onChange={handleFileChange}
                        className="mb-4"
                    />

                    {loading ? (
                        <div className="flex justify-center my-4">
                            <CircularProgress color="primary" />
                        </div>
                    ) : (
                        <Button variant="contained" color="primary" type="submit" fullWidth>
                            Guardar
                        </Button>
                    )}
                </>
            ) : (
                <div className="text-center">
                    <p className="text-green-600 text-lg font-semibold my-4">
                        ✅ Datos guardados exitosamente.
                    </p>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "#00a650", color: "#fff" }} // Verde estilo Mercado Libre
                        onClick={() => navigate('/')}
                        fullWidth
                    >
                        Volver a la página principal
                    </Button>
                </div>
            )}
        </form>
    );
};

export default DoctorForm;
