import React, { useState } from "react";
import { TextField, Button, MenuItem } from "@mui/material";

const DoctorForm = () => {
    const [formData, setFormData] = useState({
        DrName: '',
        Charge: '',
        Phone: '',
        Prize: '',
        Services: '',
        imagen: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({...formData, imagen: e.target.files[0]});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        form.append("DrName", formData.DrName);
        form.append("Charge", formData.Charge);
        form.append("Phone", formData.Phone);
        form.append("Prize", formData.Prize);
        form.append("Services", formData.Services);
        form.append("imagen", formData.imagen);  // Aquí estamos añadiendo la imagen

        try {
            const response = await fetch('https://be-medicapp.onrender.com/InsertarTempMedicos', {
            //const response = await fetch('http://localhost:4000/InsertarTempMedicos', {
                method: 'POST',
                body: form // Usamos el objeto FormData
            });

            if (!response.ok) {
                throw new Error('Error en la red');
            }

            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl mb-4 text-center">Formulario de Médico</h2>
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
            <Button variant="contained" color="primary" type="submit" fullWidth>
                Guardar
            </Button>
        </form>
    );
};

export default DoctorForm;
